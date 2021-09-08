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
                      @click="createExam"
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
                          :items="levels"
                          label="Level"
                        ></v-select>
                        <v-select
                          v-model="subject"
                          :items="subjects"
                          label="Subject"
                        ></v-select>
                        <v-select
                          v-model="steps"
                          :items="[5,10,15,20,25,30,40,50]"
                          label="No of questions want to create?"
                        ></v-select>
                        <v-dialog
                          ref="dialog"
                          v-model="modal2"
                          :return-value.sync="time"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="time"
                              label="Time"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="modal2"
                            v-model="time"
                            full-width
                            color="secondary"
                            scrollable
                            format="24hr"
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="secondary"
                              @click="modal2 = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="secondary"
                              @click="$refs.dialog.save(time)"
                            >
                              OK
                            </v-btn>
                          </v-time-picker>
                        </v-dialog>
                      </v-card-text>
                    </v-card>
                    {{time}}
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
// import axios from 'axios'
export default {
    components: { Question },
    props: ['subjects','levels'],
    data () {
      return {
        e6: 1,
        steps: 5,
        level:1,
        subject:1,
        time: null,
        modal2: false,
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
      createExam() {

      },
      // getAllDropDownData() {
      //   axios.get(`${process.env.VUE_APP_REST_API}/subjects`,{
      //           headers: {
      //               'Accept': 'application/json'
      //           }
      //       }).then((res) =>{
      //           console.log(res.data);
      //           // this.randomtext = res.data.saying+"("+res.data.author+")";
      //       })
      // }
      
    },
    mounted() {
      // this.getAllDropDownData()
    },
    
}
</script>
<style>
    
</style>