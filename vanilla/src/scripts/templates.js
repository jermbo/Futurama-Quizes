export const WelcomeTemplate = `<div class="intro">
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
    class="fancy-number question-length"
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
    <input type="radio" name="answer" />
    <span>${num}</span><span>${txt}</span>
  </label>`;
};
export const ReviewTemplate = (correct, length) => {
  return `<div class="review">
  <h2>All done!</h2>
  <p>You got ${correct} of ${length}</p>
  <button class="start-over">Start Over</button>
</div>`;
};
