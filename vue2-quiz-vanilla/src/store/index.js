import Vue from "vue";
import Vuex from "vuex";
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: 'Jermbo',
      difficulty: 'medium',
      numberOfQuestions: 2
    },
    allQuestions: [],
    randomQuestions: [],
    questionIndex: 0,
    userScore: 0,
  },
  getters: {
    currentQuestion(state) {
      const { questionIndex, randomQuestions } = state;
      return randomQuestions[questionIndex];
    }
  },
  actions: {
    async getQuestions({ commit, dispatch }) {
      const resp = await fetch('https://api.sampleapis.com/futurama/questions');
      const data = await resp.json();
      commit("SET_QUESTIONS", data);
      dispatch("randomizeQuestions");
    },
    nextQuestion({ state, commit }) {
      const { questionIndex, userInfo } = state;
      if (questionIndex >= userInfo.numberOfQuestions - 1) {
        router.push({ name: "Summary" })
        return;
      }

      commit("UPDATE_INDEX", questionIndex + 1);
    },
    checkAnswer({ state, commit, getters }, answer) {
      if (answer == getters.currentQuestion.correctAnswer) {
        commit("UPDATE_SCORE", state.userScore + 1)
      }
    },
    resetGame({ commit, dispatch }) {
      dispatch("randomizeQuestions");
      commit("RESET_SCORE_AND_INDEX");
    },
    randomizeQuestions({ state, commit }) {
      const { allQuestions, userInfo } = state;
      const { numberOfQuestions } = userInfo;
      const randomize = allQuestions.sort(() => Math.random() > 0.5 ? -1 : 1);
      const reduced = randomize.splice(0, numberOfQuestions);
      commit("SET_RANDOM_QUESTIONS", reduced);
    }
  },
  mutations: {
    SET_QUESTIONS(state, payload) {
      state.allQuestions = payload;
    },
    UPDATE_INDEX(state, payload) {
      state.questionIndex = payload;
    },
    UPDATE_SCORE(state, payload) {
      state.userScore = payload;
    },
    RESET_SCORE_AND_INDEX(state) {
      state.userScore = 0;
      state.questionIndex = 0;
    },
    SET_RANDOM_QUESTIONS(state, payload) {
      state.randomQuestions = payload;
    }
  },
});
