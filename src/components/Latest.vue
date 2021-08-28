<template>
  <v-container>
   <v-card
    class="mx-auto"
    max-width="1300px"
    tile
  >
    <v-list shaped>
      <v-subheader>Latest Exams</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in latestQuiz"
          :key="i"
          
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <p class="text--secondary">Duration: {{item.duration}}</p>
            <p class="text--secondary">No of attempts: {{item.noOfAttempts}}</p>
            <p class="text--secondary">Exam date: {{item.date}}</p>
          </v-list-item-content>
           <v-btn color="secondary" v-if="time">Attempt</v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Latest',

    data: () => ({
      latestQuiz :[
        { 
          icon: 'mdi-cards-diamond-outline',
          text: 'new exam 1' ,
          duration: '2h',
          noOfAttempts: '1',
          date: new Date().toLocaleDateString()
        },
        { icon: 'mdi-cards-diamond-outline',
          text: "new exam 2",
          duration: '2h',
          noOfAttempts: '2',
          date: new Date().toLocaleDateString()
        }

      ],
      time: true

    }),
  }
</script>

