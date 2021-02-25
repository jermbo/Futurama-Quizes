<template>
  <div className="review">
    <p>You got 1 of 3</p>
    <h2>All done!</h2>
    <p>You finished the quiz on difficulty.</p>
    <button className="start-over">Start Over</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Summary",
  components: {},
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
};
</script>
