import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Quiz.scss';

const Quiz: React.FC = () => {

  const {questions} = useContext(GlobalContext);

  return (
    <div className="Quiz" data-testid="Quiz">
      <pre>{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}

export default Quiz;
