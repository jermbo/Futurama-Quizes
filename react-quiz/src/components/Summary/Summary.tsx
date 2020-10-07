import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { AppStateEnum } from '../../utils/enums';
import './Summary.scss';

const Summary: React.FC = () => {
  const {setAppState, userInfo, userScore} = useContext(GlobalContext);
  const {numberOfQuestions, difficulty} = userInfo


  const restart = () => {
    setAppState(AppStateEnum.welcome);
  }

  return (
    <div className="review">
      <p>You got {userScore} of {numberOfQuestions}</p>
      <h2>All done!</h2><p>You finished the quiz on {difficulty}.</p>
      <button className="start-over" onClick={() => restart()}>Start Over</button>
    </div>
  );
}

export default Summary;
