<template>
  <div class="intro">
    <h2 class="intro-title">The Ultimate Futurama Fan Quiz!</h2>
    <p>UserName {{ userInfo.name }}</p>
    <p>Difficulty {{ userInfo.difficulty }}</p>
    <p>Number of Questions {{ userInfo.numberOfQuestions }}</p>
    <p>
      I
      <input
        class="name fancy-text"
        maxLength="10"
        type="text"
        placeholder="Futurama-bot"
        v-model="userInfo.name"
      />
      , am the biggest Futurama fan the world has ever seen!
    </p>
    <p>
      I will prove it by taking the
      <select class="fancy-select difficulty" v-model="userInfo.difficulty">
        <option value="easy">Easiest</option>
        <option value="medium">Modest</option>
        <option value="hard">Hardest</option>
      </select>
      of challenges and will answer
      <input
        class="fancy-number question-length"
        type="number"
        placeholder="10"
        min="1"
        :max="allQuestions.length"
        step="1"
        v-model="userInfo.numberOfQuestions"
      />
      of your questions!
    </p>
    <button class="start-btn" @click="goToQuiz">Start Quiz</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["userInfo", "allQuestions"]),
    ...mapGetters([]),
  },
  created() {
    if (!this.allQuestions.length) {
      this.getQuestions();
    }
  },
  methods: {
    ...mapActions(["getQuestions"]),
    goToQuiz() {
      const { name, difficulty, numberOfQuestions } = this.userInfo;
      if (!name || !difficulty || !numberOfQuestions) {
        return;
      }
      this.$router.push({ name: "Quiz" });
    },
  },
};
</script>
