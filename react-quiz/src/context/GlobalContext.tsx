import React, { createContext, Dispatch, useEffect, useState } from "react";
import { AppStateEnum } from "../utils/enums";

export interface iQuestion {
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
  userScore: number;
  setUserScore: Dispatch<number>;
}

export const initialValues: iAppState = {
  appState: AppStateEnum.welcome,
  setAppState: () => {},
  userInfo: {
    name: "jermbo",
    difficulty: "easy",
    numberOfQuestions: 10,
  },
  setUserInfo: () => {},
  questions: [],
  setQuestions: () => [],
  userScore: 0,
  setUserScore: () => {},
};

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
  const [appState, setAppState] = useState(AppStateEnum.welcome);
  const [userInfo, setUserInfo] = useState(initialValues.userInfo);
  const [userScore, setUserScore] = useState(initialValues.userScore);

  const [questions, setQuestions] = useState(initialValues.questions);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const resp = await fetch("https://api.sampleapis.com/futurama/questions");
    const data = await resp.json();
    setQuestions(data);
  };

  const values = {
    appState,
    setAppState,
    userInfo,
    setUserInfo,
    questions,
    setQuestions,
    userScore,
    setUserScore,
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};
