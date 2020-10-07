import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { AppStateEnum } from '../../utils/enums';
import './Summary.scss';

const Summary: React.FC = () => {
  const {setAppState} = useContext(GlobalContext);


  const restart = () => {
    setAppState(AppStateEnum.welcome);
  }

  return (
    <div className="Summary" data-testid="Summary">
      Summary Component
      <button onClick={() => restart()}>Restart Quiz</button>
    </div>
  );
}

export default Summary;
