import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { QuestionsContext } from '../App'

export const Quiz = (props: any) => {
  let history = useHistory();

  const index = props.match.params.index
  const questions = useContext(QuestionsContext)
  const question = questions[index];

  if (!questions.length || !question) {
    history.push({
      pathname: '/welcome'
    });
    return null
  }

  return (
    <>
      <h1>Quiz Screen</h1>
      <h2>{question.question}</h2>
      <ul>
        {question.possibleAnswers.map((answer, index) => (
          <li>
            <input type="radio" id={answer} name="answer" />
            <label htmlFor={answer}>{answer}</label>
          </li>
        ))}
      </ul>
    </>
  )
}
