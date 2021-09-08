<template>
    <div>
        <v-container class="grey lighten-5">
            <v-card class="mx-auto" light color="white" width="auto">
                <v-card-title >
                    <p>Quiz Name</p>
                    <v-spacer></v-spacer>
                    <p class="red--text text--accent-2">Remaining time: 01:25:23</p>
                </v-card-title>
                <v-card-subtitle>Math Questions</v-card-subtitle>
                
                <v-divider class="mx-4"></v-divider>
                <div>
                    <v-card-text>Question {{page}}: {{currentQuiz.quiz}}</v-card-text>
                </div>
                <v-list shaped  v-for="(item, i) in currentQuiz.answers" :key="item.id">
                    
                    <v-list-item-group
                        v-model="selectedAnswers"
                        multiple
                    >
                        <template>
                        <v-divider
                            v-if="!item"
                            :key="`divider-${i}`"
                        ></v-divider>
                        
                        <v-list-item
                            v-else
                            
                            :value="item"
                            active-class="black--text text--accent-4"
                        >
                            <template v-slot:default="{ active }">
                            <v-list-item-content>
                                <v-card-text v-text="`${i + 1}.  ${item.answer}`"></v-card-text>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-checkbox
                                :input-value="active"
                                color="black accent-4"
                                ></v-checkbox>
                            </v-list-item-action>
                            </template>
                        </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
                <v-row align="center" justify="center" class="mb-4">
                    <v-btn-toggle  tile color="black accent-3" group >
                        <v-btn value="left" @click="back">
                            Previous
                        </v-btn>
                        <v-btn value="center" @click="next">
                            Next
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
                <v-divider class="mx-4"></v-divider>
                <v-row justify="center" class="mb-2">
                    <v-col>
                        <v-container class="max-width">
                            <v-pagination
                            v-model="page"
                            class="my-4"
                            :length="paginationCountSet"
                            color="secondary"
                            ></v-pagination>
                        </v-container>
                    </v-col>
                </v-row>
                <v-divider class="mx-4"></v-divider>
                 <v-row align="center" justify="center" class="mb-4 mt-4">
                        <v-btn value="left" color="secondary" class="mr-2">
                            Submit
                        </v-btn>
                        <v-btn value="center" color="lime accent-2">
                            Cancel
                        </v-btn>
                </v-row>
                <v-divider class="mx-4"></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            paginationCount: 0,
            questionAnswers: [],
            currentQuiz: [],
            
            selectedAnswers: [],
            page: 1,
        }
    },
    methods: {
        getAllQuestionAndAnswers() {
            console.log(this.$route.params.id);

            axios.get(`${process.env.VUE_APP_REST_API}/exams/${this.$route.params.id}`).then((res) => {
                console.log(res.data);
                this.questionAnswers = res.data.quizs
            }).catch((err) => {
                console.log(err);
            })
        },
        next() {
            if(this.page === this.questionAnswers.length ) return
            this.page = this.page + 1
        },
        back() {
            if(this.page === 1 ) return
            this.page = this.page - 1
        }
    },
    computed: {
        paginationCountSet: function () {
            return parseInt(this.questionAnswers.length)
        }
    },
    watch: {
        page: function (pageno_new) {
            //this.answer = 'Waiting for you to stop typing...'
            // let previousPage = pageno_old;
            // let nextPage = pageno_new + 1 ;
            this.currentQuiz = this.questionAnswers[pageno_new-1];
        }
    },
    mounted() {
        this.getAllQuestionAndAnswers();
        this.currentQuiz = this.questionAnswers[0]
        
    },
}
</script>