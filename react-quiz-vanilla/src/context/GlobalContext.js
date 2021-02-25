import React, { createContext, useEffect, useState } from 'react';
import { AppStateEnum } from '../utils/enums';

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [appState, setAppState] = useState(AppStateEnum.welcome);
  const [userInfo, setUserInfo] = useState({});
  const [userScore, setUserScore] = useState(0);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/futurama/questions')
      .then(resp => resp.json())
      .then(data => {
        setQuestions(data);
      });
  }, [])

  const values = {
    appState,
    setAppState,
    userInfo,
    setUserInfo,
    questions,
    setQuestions,
    userScore,
    setUserScore,
  }

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};