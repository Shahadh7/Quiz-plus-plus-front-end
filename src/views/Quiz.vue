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
                                    v-for="item in levels" :key="item.levelId" 
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
                                        v-for="item in subjectList" :key="item.subjectId" 
                                    >
                                    {{item.subject}}
                                    </v-chip>
                                </v-chip-group>
                            </v-card-text>

                            <v-btn color="secondary" class="ml-4">Filter</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>

                    <v-list shaped>
                        <v-subheader>Available quizzes</v-subheader>
                        <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                        >
                            <v-list-item
                            v-for="(item, i) in availableExams"
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
                                <v-btn color="secondary" @click="$router.push({ name: 'QuizAttempt', params: { slug: item.slug } })">Attempt</v-btn>
                            </v-list-item>
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
            subjectList: [
                {
                    subjectId: 1,
                    subject: "Maths"
                },
                {
                    subjectId: 2,
                    subject: "English"
                },
                {
                    subjectId: 3,
                    subject: "Tamil"
                },
                {
                    subjectId: 4,
                    subject: "Sinhala"
                },
                {
                    subjectId: 5,
                    subject: "Science"
                },
                {
                    subjectId: 6,
                    subject: "Religion"
                },
                {
                    subjectId: 7,
                    subject: "ICT"
                }
            ],
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
            availableExams: [
                {
                    examId: 1,
                    icon: 'mdi-cards-diamond-outline',
                    text: "Simple Math",
                    duration: '2h',
                    level: 'Grade 2',
                    subject: 'Maths',
                    noOfAttempts: '2',
                    slug:'simple-math-grade-3',
                    date: new Date().toLocaleDateString()
                },
                {
                    examId: 2,
                    icon: 'mdi-cards-diamond-outline',
                    text: "Applied Science New",
                    duration: '2h',
                    subject: 'Maths',
                    level: 'Grade 1',
                    noOfAttempts: '2',
                    slug:'applied-science-grade-1',
                    date: new Date().toLocaleDateString()
                },
                {
                    examId: 3,
                    icon: 'mdi-cards-diamond-outline',
                    text: "John Rambo",
                    duration: '2h',
                    level: 'Grade 1',
                    subject: 'Maths',
                    noOfAttempts: '2',
                    slug:'john-rambo-grade-2',
                    date: new Date().toLocaleDateString()
                }
            ],
            selectedLevel: "",
            selectedSubjects: [],
            randomtext: "",
        }
    },
    methods: {
        randomQuote() {
            axios.get('http://127.0.0.1:8000/api/sayings').then((res) =>{
                console.log(res.data);
                this.randomtext = res.data.saying+"("+res.data.author+")";
            })
        } 
    },
    mounted() {
        this.randomQuote()
    },
}
</script>
<style>
    
</style>