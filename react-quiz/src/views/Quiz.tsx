import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import { QuestionsContext } from '../App'
import { PossibleAnswer } from '../components/PossibleAnswer';
import { QuizHeader } from '../components/QuizHeader';

export const Quiz = (props: any) => {
  let history = useHistory();

  const index = +props.match.params.index
  const nextQuestionIndex = index + 1;
  const questions = useContext(QuestionsContext)
  const question = questions[index];

  if (!questions.length || !question) {
    history.push({
      pathname: '/welcome'
    });
    return null;
  }
  return (
    <div className="question-wrapper">
      <QuizHeader question={question.question} index={index + 1} total={questions.length} />
      <div className="answers-wrapper">
        <p><strong>Possible Answers</strong></p>
        <div className="possible-answers">
          {question.possibleAnswers.map((answer, index) => (
            <PossibleAnswer key={answer} answer={answer} index={index} />
          ))}
        </div>
        <Link
          className="next-btn"
          to={{
            pathname: `/quiz/${nextQuestionIndex}`,
          }}
        >Next Question</Link>
        {/* <button className="next-btn" onClick={() => nextQuestion()}>Next Question</button> */}
      </div>
    </div>
  )
}
