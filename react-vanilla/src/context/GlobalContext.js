import React, { createContext, useEffect, useState } from 'react';
import { AppStateEnum } from '../utils/enums';

// export const initialValues = {
//   appState: AppStateEnum.welcome,
//   setAppState: () => {},
//   userInfo: {
//     name: 'jermbo',
//     difficulty: 'easy',
//     numberOfQuestions: 10
//   },
//   setUserInfo: () => {},
//   questions: [],
//   setQuestions: () => [],
//   userScore: 0,
//   setUserScore: () => {}
// };

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [appState, setAppState] = useState(AppStateEnum.welcome);
  const [userInfo, setUserInfo] = useState({});
  const [userScore, setUserScore] = useState(0);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://sampleapis.com/futurama/api/questions')
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