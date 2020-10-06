import React, { useContext } from 'react';
import './Main.scss';

import Welcome from '../Welcome/Welcome';
import Quiz from '../Quiz/Quiz';
import Summary from '../Summary/Summary';
import { GlobalContext } from '../../context/GlobalContext';
import { AppStateEnum } from '../../utils/enums';

const Main: React.FC = () => {
  const { appState } = useContext(GlobalContext);

  return (
    <main id="app">
      {appState === AppStateEnum.welcome && <Welcome />}
      {appState === AppStateEnum.quiz && <Quiz />}
      {appState === AppStateEnum.summary && <Summary />}
    </main>
  )
}

export default Main;
