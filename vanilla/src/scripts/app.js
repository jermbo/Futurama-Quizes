import { UserState, QuizInfo } from "./states";
import { WelcomeTemplate, QuestionBaseTemplate, PossibleAnswer, QuestionTemplate, ReviewTemplate } from "./templates";

const API_URL = "https://sampleapis.com/futurama/api/questions";
const app = document.querySelector("#app");

async function fetchQuestions() {
  let response = await fetch(API_URL);
  let data = await response.json();
  return data;
}

async function init() {
  const data = await fetchQuestions("yourUsernameHere");
  QuizInfo.allQuestions = data;
  buildStartScreen();
}

function buildStartScreen() {
  app.innerHTML = WelcomeTemplate;
  getUserInfo();
}

function getUserInfo() {
  const name = document.querySelector(".name");
  const difficulty = document.querySelector(".difficulty");
  const qLength = document.querySelector(".question-length");
  const startBtn = document.querySelector(".start-btn");

  startBtn.addEventListener("click", (e) => {
    e.preventDefault();

    UserState.name = name.value.trim();
    UserState.difficulty = difficulty.value;
    UserState.qLength = +qLength.value || 10;

    if (!UserState.name) {
      console.log("Need to fill out name, difficulty, and length.");
      return;
    }

    buildQuestions();
  });
}

function buildQuestions() {
  const tempQuestions = [...QuizInfo.allQuestions];
  const shuffled = tempQuestions.sort(() => (Math.random() > 0.5 ? 0 : -1)).slice(0, UserState.qLength);
  QuizInfo.quizQuestions = shuffled;
  console.log(QuizInfo.quizQuestions);
  startQuiz();
}

function startQuiz() {
  app.innerHTML = QuestionBaseTemplate;
  showNextQuestion();
  showNextPossibleAnswers();
  const nextBtn = document.querySelector(".next-btn");
  nextBtn.addEventListener("click", () => {
    if (QuizInfo.currentQuestion < QuizInfo.quizQuestions.length - 1) {
      console.log("what up");
      QuizInfo.currentQuestion++;
      showNextQuestion();
      showNextPossibleAnswers();
    } else {
      endQuiz();
    }
  });
}

function showNextQuestion() {
  const questionDisplay = document.querySelector(".question-area");
  const index = QuizInfo.currentQuestion;
  const length = QuizInfo.quizQuestions.length;
  const currentQuestion = QuizInfo.quizQuestions[index].question;
  questionDisplay.innerHTML = `${QuestionTemplate(index + 1, length, currentQuestion)}`;
}

function showNextPossibleAnswers() {
  const possibleAnswersDisplay = document.querySelector(".possible-answers");
  const index = QuizInfo.currentQuestion;
  possibleAnswersDisplay.innerHTML = QuizInfo.quizQuestions[index].possibleAnswers
    .map((answer, i) => {
      return PossibleAnswer(i, answer);
    })
    .join("");
}

function endQuiz() {
  console.log("all done");
  const correct = UserState.correctAnswers;
  const length = QuizInfo.quizQuestions.length;
  app.innerHTML = ReviewTemplate(correct, length);

  const startOverBtn = document.querySelector(".start-over");
  startOverBtn.addEventListener("click", () => {
    buildStartScreen();
  });
}

init();
