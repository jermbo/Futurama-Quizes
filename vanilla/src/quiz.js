import axios from "axios";

const API_URL = "https://sampleapis.com/futurama/api/questions";

// APP
let randomQuestions = [];
let questions = JSON.parse(localStorage.getItem("questions"));
const quizUser = JSON.parse(localStorage.getItem("quizUser"));

// DOM
let appRoot;
let loading;
let questionWrapper;
let questionInfoDisplay;
let questionDisplay;
let possibleAnswersDisplay;
let nextBtn;

// Quiz State
let currentQuestion = 0;
let userScore = 0;

const fetchData = async () => {
  try {
    let response = await axios.get(API_URL);
    let data = response.data;
    return data;
  } catch (error) {
    return error.response.status;
  }
};

const init = async () => {
  cacheDOM();
  loading.classList.remove("-hidden");

  if (!questions) {
    questions = await fetchData();
    localStorage.setItem("questions", JSON.stringify(questions));
  }
  if (questions === 404 || !questions) {
    loading.classList.add("-hidden");
    return displayErrorMsg("Sorry, cannot connect to database. Please try again later.");
  }

  startQuiz();
};

const cacheDOM = () => {
  appRoot = document.querySelector("#app");
  loading = document.querySelector(".loading");
  questionWrapper = document.querySelector(".question-wrapper");
  questionInfoDisplay = questionWrapper.querySelector(".question-question");
  questionDisplay = questionWrapper.querySelector(".question");
  possibleAnswersDisplay = questionWrapper.querySelector(".possible-answers");
  nextBtn = questionWrapper.querySelector(".next-btn");
  addEventListeners();
};

const addEventListeners = () => {
  nextBtn.addEventListener("click", checkAnswers);
};

const checkAnswers = (e) => {
  e.preventDefault();
  const possibleAnswers = [...questionWrapper.querySelectorAll(".possible-answer input")];
  const selectedAnswer = possibleAnswers.filter((p) => p.checked)[0];

  if (!selectedAnswer) {
    alert("Please select an answer");
    return;
  }

  console.log(selectedAnswer.value);
  console.log(randomQuestions[currentQuestion].correctAnswer);
  if (selectedAnswer.value == randomQuestions[currentQuestion].correctAnswer) {
    userScore++;
  }

  if (currentQuestion < randomQuestions.length - 1) {
    currentQuestion++;
    displayNextQuestion();
  } else {
    console.log("display end screen");
  }
};

const startQuiz = () => {
  loading.classList.add("-hidden");
  questionWrapper.classList.remove("-hidden");
  randomizeQuestions();
  displayNextQuestion();
};

const randomizeQuestions = () => {
  const length = quizUser.quizLength;
  randomQuestions = [...questions].sort(() => (Math.random() > 0.5 ? 0 : -1)).splice(0, length);
};

const displayNextQuestion = () => {
  questionDisplay.innerHTML = randomQuestions[currentQuestion].question;
  displayPossibleAnswers();
};

const displayPossibleAnswers = () => {
  const possibleAnswers = randomQuestions[currentQuestion].possibleAnswers;
  possibleAnswersDisplay.innerHTML = possibleAnswers
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .map((a, i) => {
      return `<label class="possible-answer">
        <input type="radio" name="answer" value="${a}" />
        <span>${i}</span><span>${a}</span>
      </label>`;
    })
    .join("");
};

const displayErrorMsg = (msg) => {
  appRoot.innerHTML = msg;
};

init();
