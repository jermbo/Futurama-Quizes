<template>
  <div className="review">
    <p>You got {{ userScore }} of {{ randomQuestions.length }}</p>
    <h2>All done!</h2>
    <p>You finished the quiz on {{ userInfo.difficulty }}.</p>
    <router-link :to="{ name: 'Home' }" className="start-over">
      Start Over
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Summary",
  components: {},
  computed: {
    ...mapState(["userScore", "userInfo", "randomQuestions"]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
};
</script>
