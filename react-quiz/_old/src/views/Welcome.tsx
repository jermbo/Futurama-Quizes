import React from "react";

export const Welcome = () => {
  const userNameLength: number = 10;
  return (
    <>
      <div className="intro">
        <h2 className="intro-title">The Ultimate Futurama Fan Quiz!</h2>
        <p>
          I
          <input className="name fancy-text" maxLength={userNameLength} type="text" placeholder="Futurama-bot" />, am
          the biggest Futurama fan the world has ever seen!
        </p>
        <p>
          I will prove it by taking the
          <select className="fancy-select difficulty">
            <option value="easy">Easiest</option>
            <option value="medium">Modest</option>
            <option value="hard">Hardest</option>
          </select>
          of challenges and will answer
          <input className="fancy-number question-length" type="number" placeholder="10" min="1" max="28" step="1" />
          of your questions!
        </p>
        <button className="start-btn">Start Quiz</button>
      </div>
    </>
  );
};
