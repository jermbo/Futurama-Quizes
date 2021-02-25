import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: 'Jermbo',
      difficulty: 'medium',
      numberOfQuestions: 10
    },
    allQuestions: [],
    questionIndex: 0,
    userScore: 0,
  },
  getters: {
    questions(state) {
      const { allQuestions, userInfo } = state;
      const { numberOfQuestions } = userInfo;
      const randomize = allQuestions.sort(() => Math.random() > 0.5 ? -1 : 1);
      return randomize.splice(0, numberOfQuestions);
    },
    currentQuestion(state, getters) {
      const { questions } = getters;
      const { questionIndex } = state;
      return questions[questionIndex]
    }
  },
  actions: {
    async getQuestions({ commit }) {
      const resp = await fetch('https://api.sampleapis.com/futurama/questions');
      const data = await resp.json();
      commit("SET_QUESTIONS", data);
    },
    nextQuestion({ state, commit }) {
      const { questionIndex, userInfo } = state;
      if (questionIndex >= userInfo.numberOfQuestions - 1) {
        console.log('navigate to summary');
        return;
      }

      commit("UPDATE_INDEX", questionIndex + 1);
    },
    checkAnswer({ state, commit, getters }, answer) {
      if (answer == getters.currentQuestion.correctAnswer) {
        commit("UPDATE_SCORE", state.userScore + 1)
      }
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
    }
  },
});
