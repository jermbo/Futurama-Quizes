<template>
  <div id="root">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "QuizApp",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("assets/styles.scss");
</style>

