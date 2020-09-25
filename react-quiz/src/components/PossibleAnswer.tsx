import React from 'react';

type Props = {
  answer: string;
  index: number;
}

export const PossibleAnswer = ({ answer, index }: Props) => {

  return (
    <label className="possible-answer" key={answer}>
      <input type="radio" name="answer" id={answer} value="answer" />
      <span>{index}</span>
      <span>{answer}</span>
    </label>
  )
}