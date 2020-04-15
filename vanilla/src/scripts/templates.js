export const WelcomeTemplate = "";

export const QuestionBaseTemplate = `<div class="question-wrapper">
  <div class="question-area"></div>
  <div class="answers-wrapper">
    <p><strong>Possible Answers</strong></p>
    <div class="possible-answers"></div>
    <button class="next-btn">Next Question</button>
  </div>
</div>`;

export const QuestionTemplate = (index, length, question) => `<p><strong>Question ${index} of ${length}</strong></p>
<p class="question">${question}</p>`;

export const PossibleAnswer = (num, txt) => {
  return `<label class="possible-answer">
    <input type="radio" name="answer" value="${txt}" />
    <span>${num}</span><span>${txt}</span>
  </label>`;
};

export const ReviewTemplate = (correct, length, msg) => {
  return `<div class="review">
  <h2>All done!</h2>
  <p>You got ${correct} of ${length}</p>
  <p>${msg}</p>
  <button class="start-over">Start Over</button>
</div>`;
};
