import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext, iQuestion } from '../../context/GlobalContext';
import { AppStateEnum } from '../../utils/enums';
import './Quiz.scss';

const Quiz: React.FC = () => {
  const { questions, userInfo, setAppState, userScore, setUserScore } = useContext(GlobalContext);
  const [userQuestions, setUserQuestions] = useState([] as iQuestion[]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    const { numberOfQuestions } = userInfo;
    const newQuestions = questions
                          .sort(() => Math.random() > 0.5 ? 1 : -1)
                          .splice(0, numberOfQuestions);
    setUserQuestions(newQuestions);
    setCurrentQuestion(0)
  }, [questions, userInfo]);


  const next = () => {
    if (!selectedAnswer) {
      return console.log('pick an answer')
    }

    if (selectedAnswer === userQuestions[currentQuestion].correctAnswer) {
      setUserScore(userScore + 1);
    }

    setSelectedAnswer(null);
    if (currentQuestion < userQuestions.length - 1) {
      setCurrentQuestion(currentQuestion +1);
    } else {
      setAppState(AppStateEnum.summary);
    }
  }

  const selectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  }

  if (!userQuestions.length) {
    return (
      <h2>Loading</h2>
    )
  }

  return (
    <article className="question-wrapper">
      <div className="question-area">
        <p><strong>Question {currentQuestion + 1} of {userQuestions.length}</strong></p>
        <p className="question">{userQuestions && userQuestions[currentQuestion].question}</p>
      </div>
      <div className="answers-wrapper">
        <p><strong>Possible Answers</strong></p>
        <div className="possible-answers">
          {userQuestions[currentQuestion].possibleAnswers.map((possibleAnswer, i) => {
            return (
              <label className="possible-answer" key={i}>
                <input
                  type="radio"
                  name={`answer${currentQuestion}`}
                  value={possibleAnswer}
                  onChange={() => selectAnswer(possibleAnswer)}
                  checked={selectedAnswer === possibleAnswer}
                />
                <span>{i}</span><span>{possibleAnswer}</span>
              </label>
            )
          })}
        </div>
        <button className="next-btn" onClick={next}>Next Question</button>
      </div>
    </article>
  );
}

export default Quiz;
