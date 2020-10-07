import React, { createContext, Dispatch, useEffect, useState } from 'react';
import { AppStateEnum } from '../utils/enums';

interface iQuestion {
  id: number;
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
}

interface iUserInfo {
  name: string;
  difficulty: string;
  numberOfQuestions: number;
}

interface iAppState {
  appState: AppStateEnum;
  setAppState: Dispatch<AppStateEnum>;
  userInfo: iUserInfo;
  setUserInfo: Dispatch<iUserInfo>;
  questions: iQuestion[];
  setQuestions: Dispatch<iQuestion[]>;
}

export const initialValues: iAppState = {
  appState: AppStateEnum.welcome,
  setAppState: () => {},
  userInfo: {
    name: 'jermbo',
    difficulty: '',
    numberOfQuestions: 10
  },
  setUserInfo: () => {},
  questions: [],
  setQuestions: () => []
};

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
  const [appState, setAppState] = useState(AppStateEnum.welcome);
  const [userInfo, setUserInfo] = useState(initialValues.userInfo);

  const [questions, setQuestions] = useState(initialValues.questions);

  useEffect(() => {
    fetch('https://sampleapis.com/futurama/api/questions')
    .then(resp => resp.json())
    .then(data => {
      setQuestions(data);
      console.log(data);
    });
  }, [])

  const values = {
    appState,
    setAppState,
    userInfo,
    setUserInfo,
    questions,
    setQuestions,
  }

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};
