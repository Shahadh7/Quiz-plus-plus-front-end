<template>
    <div>
        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            
          >
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon
                v-bind="attrs"
                v-on="on">
                  <v-icon class="black--text text--accent-4">mdi-plus-circle</v-icon>
              </v-btn>
              
            </template>
            <v-card >
              <v-toolbar dark color="black">
                  <v-btn
                  icon
                  dark
                  @click="dialog = false"
                  >
                  <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Create New Quiz</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                  <v-btn
                      dark
                      text
                      @click="dialog = false"
                  >
                      Save Quiz
                  </v-btn>
                  </v-toolbar-items>
              </v-toolbar>
              <v-container>
                  <div>
                    <v-card class="mb-4 mt-4 ">
                      <v-card-text>
                        <v-text-field
                          label="Quiz Name"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Sub Heading"
                        >
                        </v-text-field>
                        <v-select
                          v-model="level"
                          :items="['Grade 1','Grade 2','Grade 3']"
                          label="Level"
                        ></v-select>
                        <v-select
                          v-model="subject"
                          :items="['Maths','Science','English']"
                          label="Subject"
                        ></v-select>
                        <v-select
                          v-model="steps"
                          :items="[5,10,15,20,25,30,40,50]"
                          label="No of questions want to create?"
                        ></v-select>
                      </v-card-text>
                    </v-card>
                  </div>
              </v-container>
              <question :questionCount="steps"></question>
            </v-card>
          </v-dialog>
      </v-row>
    </div>
</template>
<script>
import Question from './Question.vue'
export default {
  components: { Question },
    data () {
      return {
        e6: 1,
        steps: 5,
        level:1,
        subject:1,
        showSubmit:false,
        dialog: false,
      }
    },

    watch: {
      steps (val) {
        if (this.e6 > val) {
          this.e6 = val
        }
      },
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.showSubmit = true
        } else {
          this.e6 = n + 1
        }
      },
      
    },
    
}
</script>
<style>
    
</style>