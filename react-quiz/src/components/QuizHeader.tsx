import React from 'react';

type Props = {
  question: string;
  index: number;
  total: number;
}

export const QuizHeader = ({ question, index, total }: Props) => {

  return (
    <div className="question-area">
      <p><strong>Question {index} of {total}</strong></p>
      <p className="question">{question}</p>
    </div>
  )
}
