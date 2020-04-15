// const API_URL = "https://sampleapis.com/futurama/api/questions";
// const appRoot = document.querySelector("#app");

let nameInput;
let difficultyInput;
let lengthInput;
let startBtn;

const getValues = (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const difficulty = difficultyInput.value;
  const quizLength = lengthInput.value;

  if (!name || !difficulty || !quizLength) {
    alert("Please fill out all fields before moving forward.");
    return;
  }

  const quizUser = { name, difficulty, quizLength };
  localStorage.setItem("quizUser", JSON.stringify(quizUser));

  window.location.href = "/quiz.html";
};

const cacheDOM = () => {
  nameInput = document.querySelector(".name");
  difficultyInput = document.querySelector(".difficulty");
  lengthInput = document.querySelector(".question-length");
  startBtn = document.querySelector(".start-btn");
};

const checkLocal = () => {
  const quizUser = JSON.parse(localStorage.getItem("quizUser"));
  if (quizUser) {
    nameInput.value = quizUser.name;
    difficultyInput.value = quizUser.difficulty;
    lengthInput.value = quizUser.quizLength;
  }
};

const addEventListeners = () => {
  startBtn.addEventListener("click", getValues);
};

const startApp = () => {
  cacheDOM();
  checkLocal();
  addEventListeners();
};

startApp();

// import { UserState, QuizInfo, CorrectPercentages } from "./states";
// import { WelcomeTemplate, QuestionBaseTemplate, PossibleAnswer, QuestionTemplate, ReviewTemplate } from "./templates";

// async function init() {
//   try {
//     let response = await fetch(API_URL);
//     let data = await response.json();
//     QuizInfo.allQuestions = data;
//     buildStartScreen();
//   } catch (err) {
//     app.innerHTML = "Sorry, cannot connect to database. Please try again later.";
//   }
// }

// function resetStats() {
//   UserState.name = "";
//   UserState.difficulty = "";
//   UserState.qLength = 0;
//   UserState.correctAnswers = 0;

//   QuizInfo.currentQuestion = 0;
//   QuizInfo.quizQuestions = [];
// }

// function buildStartScreen() {
//   resetStats();
//   app.innerHTML = WelcomeTemplate;
//   getUserInfo();
// }

// function getUserInfo() {
//   const name = document.querySelector(".name");
//   const difficulty = document.querySelector(".difficulty");
//   const qLength = document.querySelector(".question-length");
//   const startBtn = document.querySelector(".start-btn");

//   startBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     UserState.name = name.value.trim();
//     UserState.difficulty = difficulty.value;
//     UserState.qLength = +qLength.value || 10;

//     if (!UserState.name) {
//       alert("Need to fill out name, difficulty, and length.");
//       return;
//     }

//     buildQuestions();
//   });
// }

// function buildQuestions() {
//   const tempQuestions = [...QuizInfo.allQuestions];
//   const shuffled = tempQuestions.sort(() => (Math.random() > 0.5 ? 0 : -1)).slice(0, UserState.qLength);
//   QuizInfo.quizQuestions = shuffled;
//   startQuiz();
// }

// function startQuiz() {
//   app.innerHTML = QuestionBaseTemplate;
//   showNextQuestion();
//   showNextPossibleAnswers();
//   const nextBtn = document.querySelector(".next-btn");

//   nextBtn.addEventListener("click", () => {
//     const possibleAnswers = [...document.querySelectorAll(".possible-answer input")];
//     if (!possibleAnswers.some((p) => p.checked)) {
//       return alert("Please select an answer.");
//     }

//     const selected = possibleAnswers.filter((p) => p.checked)[0];
//     if (selected.value === QuizInfo.quizQuestions[QuizInfo.currentQuestion].correctAnswer) {
//       UserState.correctAnswers++;
//     }

//     if (QuizInfo.currentQuestion < QuizInfo.quizQuestions.length - 1) {
//       QuizInfo.currentQuestion++;
//       showNextQuestion();
//       showNextPossibleAnswers();
//     } else {
//       endQuiz();
//     }
//   });
// }

// function showNextQuestion() {
//   const questionDisplay = document.querySelector(".question-area");
//   const index = QuizInfo.currentQuestion;
//   const length = QuizInfo.quizQuestions.length;
//   const currentQuestion = QuizInfo.quizQuestions[index].question;
//   questionDisplay.innerHTML = `${QuestionTemplate(index + 1, length, currentQuestion)}`;
// }

// function showNextPossibleAnswers() {
//   const possibleAnswersDisplay = document.querySelector(".possible-answers");
//   const index = QuizInfo.currentQuestion;
//   possibleAnswersDisplay.innerHTML = QuizInfo.quizQuestions[index].possibleAnswers
//     .map((answer, i) => {
//       return PossibleAnswer(i, answer);
//     })
//     .join("");
// }

// function endQuiz() {
//   const correct = UserState.correctAnswers;
//   const length = QuizInfo.quizQuestions.length;

//   const neededPercentage = CorrectPercentages[UserState.difficulty];
//   const passed = correct / length >= neededPercentage;
//   const message = passed
//     ? `You passed the quiz on ${UserState.difficulty.toUpperCase()}.`
//     : "You did not pass the futurama quiz! Go home and watch all seasons, tonight!";

//   app.innerHTML = ReviewTemplate(correct, length, message);

//   const startOverBtn = document.querySelector(".start-over");
//   startOverBtn.addEventListener("click", () => {
//     buildStartScreen();
//   });
// }

// init();
