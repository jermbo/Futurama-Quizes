import axios from "axios";

const API_URL = "https://sampleapis.com/futurama/api/questionsff";

let appRoot;
let loading;
let questionWrapper;

const fetchData = async () => {
  try {
    let response = await axios.get(API_URL);
    let data = await response.json();
    return data;
  } catch (error) {
    return error.response.status;
  }
};

const startQuiz = async () => {
  cacheDOM();
  loading.classList.remove("-hidden");

  const questions = await fetchData();
  if (questions === 404) {
    loading.classList.add("-hidden");
    return displayErrorMsg("Sorry, cannot connect to database. Please try again later.");
  }
};

const cacheDOM = () => {
  appRoot = document.querySelector("#app");
  loading = document.querySelector(".loading");
  questionWrapper = document.querySelector(".question-wrapper");
};

const possibleAnswerTemplate = (num, txt) => {
  return `<label class="possible-answer">
    <input type="radio" name="answer" value="${txt}" />
    <span>${num}</span><span>${txt}</span>
  </label>`;
};

const displayErrorMsg = (msg) => {
  appRoot.innerHTML = msg;
};

startQuiz();
