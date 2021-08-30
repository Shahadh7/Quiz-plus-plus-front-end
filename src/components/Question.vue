<template>
  <v-container>
      <v-expansion-panels>
        <v-expansion-panel
        v-for="(item,i) in questionList"
        :key="i"
        >
        <v-expansion-panel-header>
            Question {{i+1}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-container>
                <v-text-field
                label="Question"
                clearable
                v-model="questionList[i].question"
                class="mb-3"
                >
                </v-text-field>
                <v-text-field
                label="Answer 1"
                clearable
                v-model="questionList[i].answers[0].answer1"
                >
                </v-text-field>
                <v-checkbox
                    v-model="questionList[i].answers[0].isCorrect"
                    :label="` Mark answer ${i+1} as correct answer`"
                    color="red"
                    value="true"
                    hide-details
                    class="mb-3 ml-3"
                ></v-checkbox>
                <v-text-field
                label="Answer 2"
                v-model="questionList[i].answers[1].answer2"
                clearable
                >
                </v-text-field>
                <v-checkbox
                    v-model="questionList[i].answers[1].isCorrect"
                    :label="` Mark answer ${i+2} as correct answer`"
                    color="red"
                    value="true"
                    hide-details
                    class="mb-3 ml-3"
                ></v-checkbox>
                <v-text-field
                label="Answer 3"
                v-model="questionList[i].answers[2].answer3"
                clearable
                >
                </v-text-field>
                <v-checkbox
                    v-model="questionList[i].answers[2].isCorrect"
                    :label="` Mark answer ${i+3} as correct answer`"
                    color="red"
                    value="true"
                    hide-details
                    class="mb-3 ml-3"
                ></v-checkbox>
                <v-text-field
                label="Answer 4"
                v-model="questionList[i].answers[3].answer4"
                clearable
                >
                </v-text-field>
                <v-checkbox
                    v-model="questionList[i].answers[3].isCorrect"
                    :label="` Mark answer ${i+4} as correct answer`"
                    color="red"
                    value="true"
                    hide-details
                    class="mb-3 ml-3"
                ></v-checkbox>
            </v-container>
        </v-expansion-panel-content>
        </v-expansion-panel>
  </v-expansion-panels>
  </v-container>
</template>

<script>
  export default {
    name: 'Question',
    props: ['questionCount'],

    data: () => ({
        questionList: [],
        currentQuestion: {
          question: "",
          answers: [
            {
              answer1: "",
              isCorrect: false
            },
            {
              answer2: "",
              isCorrect: false
            },
            {
              answer3: "",
              isCorrect: false
            },
            {
              answer4: "",
              isCorrect: false
            }
          ]
        }
    }),
    methods: {
        setInitialQuestionList() {
            for(var i=0 ; i < 5 ; i++) {
                this.questionList.push({
                    questionId: i,
                    question: "",
                    answers: [
                        {
                        answer1: "",
                        isCorrect: false
                        },
                        {
                        answer2: "",
                        isCorrect: false
                        },
                        {
                        answer3: "",
                        isCorrect: false
                        },
                        {
                        answer4: "",
                        isCorrect: false
                        }
                    ]
                })
            }
        }
    },
    watch: {
        questionCount: function(val) {
            this.questionList = []
            for(var i=0 ; i < val ; i++) {
                this.questionList.push({
                    questionId: i,
                    question: "",
                    answers: [
                        {
                        answer1: "",
                        isCorrect: false
                        },
                        {
                        answer2: "",
                        isCorrect: false
                        },
                        {
                        answer3: "",
                        isCorrect: false
                        },
                        {
                        answer4: "",
                        isCorrect: false
                        }
                    ]
                })
            }
        }
    },
    mounted() {
        this.setInitialQuestionList();
        console.log(this.questionList);
    },
  }
</script>

