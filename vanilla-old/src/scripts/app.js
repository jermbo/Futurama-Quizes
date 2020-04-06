// Capture User Information
// Pull number of questions and display one at at time
// Answer a question
// Review Screen
// Start Over

// const App = (function () {
//   const API_URL = "https://sampleapis.com/futurama/api/questions";
//   let startBtn;
//   let userName;
//   let difficulty;
//   let qLength;
//   const allQuestions = [];

//   function cacheDom() {
//     startBtn = document.querySelector(".start-btn");
//     userName = document.querySelector(".name");
//     difficulty = document.querySelector(".difficulty");
//     qLength = document.querySelector(".questionLength");
//   }

//   function addEventListeners() {
//     startBtn.addEventListener("click", captureUserData);
//   }

//   function captureUserData() {
//     if (!userName.value || !difficulty.value || !qLength.value) {
//       console.log("need to fill out all fields");
//       return;
//     }
//   }

//   function getAllQuestions() {
//     fetch(API_URL)
//       .then((resp) => resp.json())
//       .then((data) => allQuestions.push(...data));
//   }

//   function init() {
//     cacheDom();
//     addEventListeners();
//     getAllQuestions();
//   }

//   init();
// })();

const WelcomeTemplate = `<div class="intro">
<h2 class="intro-title">The Ultimate Futurama Fan Quiz!</h2>
<p>
  I
  <input class="name fancy-text" maxlength="10" type="text" placeholder="Futurama-bot" />, am the biggest
  Futurama fan the world has ever seen!
</p>
<p>
  I will prove it by taking the
  <select class="fancy-select difficulty">
    <option value="easy">Easiest</option>
    <option value="medium">Modest</option>
    <option value="hard">Hardest</option>
  </select>
  of challenges and will answer<input
    class="fancy-number questionLength"
    type="number"
    placeholder="10"
    min="1"
    max="28"
    step="1"
  />
  of your questions!
</p>
<button class="start-btn">Start Quiz</button>
</div>`;
