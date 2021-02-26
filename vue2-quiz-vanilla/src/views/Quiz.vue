<template>
  <div class="intro">
    <article class="question-wrapper" v-if="allQuestions">
      <div class="question-area">
        <p>
          <strong>
            Question {{ questionIndex + 1 }} of {{ randomQuestions.length }}
          </strong>
        </p>
        <p class="question">{{ currentQuestion.question }}</p>
      </div>
      <div class="answers-wrapper">
        <p><strong>Possible Answers</strong></p>
        <div class="possible-answers">
          <label
            class="possible-answer"
            v-for="(answer, index) in currentQuestion.possibleAnswers"
            :key="answer"
          >
            <input
              type="radio"
              name="answer"
              :value="answer"
              v-model="selectedAnswer"
            />
            <span>{{ index + 1 }} </span>
            <span>{{ answer }}</span>
          </label>
        </div>
        <button class="next-btn" @click="next">Next Question</button>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Quiz",
  components: {},
  data() {
    return {
      selectedAnswer: null,
    };
  },
  created() {
    if (!this.allQuestions.length) {
      this.$router.push({ name: "Home" });
    }
  },
  computed: {
    ...mapState([
      "allQuestions",
      "questionIndex",
      "userScore",
      "randomQuestions",
    ]),
    ...mapGetters(["currentQuestion"]),
  },

  methods: {
    ...mapActions(["checkAnswer", "nextQuestion"]),
    next() {
      if (!this.selectedAnswer) {
        console.log("gotta choose an aswer");
        return;
      }
      this.checkAnswer(this.selectedAnswer);
      this.nextQuestion();
      this.selectedAnswer = null;
    },
    updateAnswer(e) {
      console.log(e.target.value);
    },
  },
};
</script>
