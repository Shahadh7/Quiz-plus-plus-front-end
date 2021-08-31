<template>
    <div>
        
        <v-container>
            <v-row>
               <v-col >
                    <h1 class=" text-center white--text text--accent-4 font-weight-large ">{{randomtext}}</h1>
               </v-col>
            </v-row>
            <v-card class="mx-auto mt-10">
                <v-toolbar flat color="silver accent-5" light outlined >
                    <v-card-title class="blue--text text--accent-4"></v-card-title>
                   <v-spacer></v-spacer>
                    <create-quiz></create-quiz>
                </v-toolbar>
                    <v-expansion-panels focusable>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Filter</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-card-text>
                                <h2 class="text-h6 mb-2">
                                    Choose Level
                                </h2>

                                <v-chip-group
                                    v-model="selectedLevel"
                                    column
                                >
                                    <v-chip
                                    filter
                                    outlined
                                    v-for="item in levels" :key="item.id" 
                                    >
                                    {{item.level}}
                                    </v-chip>
                                </v-chip-group>
                            </v-card-text>

                            <v-card-text>
                                <h2 class="text-h6 mb-2">
                                    Choose Subjects
                                </h2>

                                <v-chip-group v-model="selectedSubjects" column multiple>
                                    <v-chip
                                        filter
                                        outlined
                                        v-for="item in subjectList" :key="item.id" 
                                    >
                                    {{item.name}}
                                    </v-chip>
                                </v-chip-group>
                            </v-card-text>
                            {{selectedLevel}}
                            <v-btn color="secondary" class="ml-4" @click="filterExams">Filter</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>

                    <v-list shaped>
                        <v-subheader>Available quizzes</v-subheader>
                        <v-list-item-group
                            color="primary"
                            
                        >
                            <div v-if="availableExams">
                                    <v-list-item
                            v-for="(item) in availableExams"
                            :key="item.id"
                            >
                                <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.exam_name"></v-list-item-title>
                                    <p class="text--secondary">Duration: {{item.duration}}</p>
                                    <p class="text--secondary">No of attempts: --</p>
                                    <p class="text--secondary">Exam date: {{item.date}}</p>
                                </v-list-item-content>
                                <v-btn color="secondary" @click="$router.push({ name: 'QuizAttempt', params: { slug: item.slug , id: item.id } })">Attempt</v-btn>
                            </v-list-item>
                            </div>
                            <div v-else>
                                No exams available
                            </div>
                            
                        </v-list-item-group>
                    </v-list>
                    
            </v-card>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios';
import CreateQuiz from '../components/CreateQuiz.vue';
export default {
  components: { CreateQuiz },
    data() {
        return {
            subjectList: [],
            icon: "mdi-cards-diamond-outline",
            levels: [
                {
                    levelId:1,
                    level: "Grade 1",
                },
                {
                    levelId:2,
                    level: "Grade 2",
                },
                {
                    levelId:3,
                    level: "Grade 3",
                },
                {
                    levelId:4,
                    level: "Grade 4",
                },
                {
                    levelId:5,
                    level: "Grade 5",
                },
            ],
            availableExams: [],
            selectedLevel: "",
            selectedSubjects: [],
            randomtext: ""
        }
    },
    methods: {
        randomQuote() {
            axios.get(`${process.env.VUE_APP_REST_API}/sayings`,{
                headers: {
                    'Accept': 'application/json'
                }
            }).then((res) =>{
                // console.log(res.data);
                this.randomtext = res.data.saying+"("+res.data.author+")";
            })
        },
        getAllAvailableExams() {
            axios.get(`${process.env.VUE_APP_REST_API}/exams`,{
                headers: {
                    'Accept': 'application/json'
                }
            }).then((res) => {
                // console.log(res.data['exams']);
                this.availableExams = res.data['exams'];
            })
        },
        getSubjects() {
            axios.get(`${process.env.VUE_APP_REST_API}/subjects`,{
                headers: {
                    'Accept': 'application/json'
                }
            }).then((res) => {
                this.subjectList = res.data;
            })
        },
        getLevels() {
            axios.get(`${process.env.VUE_APP_REST_API}/levels`,{
                headers: {
                    'Accept': 'application/json'
                }
            }).then((res) => {
                this.levels = res.data;
            })
        },
        filterExams() {
              if((this.selectedLevel !== "" && this.selectedSubjects.length > 0 && isNaN(this.selectedLevel) == false )) {
                var level = this.selectedLevel + 1
                var subjects = this.selectedSubjects.map(function(val){return ++val;});
                axios.get(`${process.env.VUE_APP_REST_API}/exams/`,{
                    params: {
                        level: level,
                        subjects: subjects
                    },
                    headers: {
                        'Accept': 'application/json'
                    }
                    
                }).then((res) => {
                        this.availableExams = res.data
                        //this.availableExams = res.data['exams'];
                }) 
              }else if (this.selectedLevel !== "" && isNaN(this.selectedLevel) == false) {
                level = this.selectedLevel + 1
                axios.get(`${process.env.VUE_APP_REST_API}/exams/`,{
                    params: {
                        level: level,
                    },
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then((res) => {
                        this.availableExams = res.data
                        //this.availableExams = res.data['exams'];
                }) 
              }else if (this.selectedSubjects.length > 0) {
                subjects = this.selectedSubjects.map(function(val){return ++val;});
                axios.get(`${process.env.VUE_APP_REST_API}/exams/`,{
                    params: {
                        subjects: subjects
                    },
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then((res) => {
                        this.availableExams = res.data
                        //this.availableExams = res.data['exams'];
                }) 
              }else {
                  this.getAllAvailableExams()
              }
               
               
        },
        test() {

            return new Promise(function(resolve, reject) {
                fetch('https://safe-gorge-82079.herokuapp.com/api/exams/', {
                    params: {
                    level: 1,
                    }
                }).then(response => {
                    console.log(response.data);
                    resolve(response);
                })
                })
        } 
    },
    mounted() {
        this.randomQuote()
        this.getAllAvailableExams();
        this.getSubjects()
        this.getLevels()
        this.test()

    },
}
</script>
<style>
    
</style>