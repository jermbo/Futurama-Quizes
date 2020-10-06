import React, { createContext, Dispatch, useState } from 'react';
import { AppStateEnum } from '../utils/enums';

interface iUserInfo {
  name: string;
  difficulty: string;
  numberOfQuestions: number;
}

interface iAppState {
  appState: AppStateEnum;
  setAppState: Dispatch<AppStateEnum>;
  userInfo: iUserInfo;
  setUserInfo: Dispatch<iUserInfo>
}

export const initialValues: iAppState = {
  appState: AppStateEnum.welcome,
  setAppState: () => {},
  userInfo:{
    name: 'jermbo',
    difficulty: '',
    numberOfQuestions: 10
  },
  setUserInfo: () => {}
};

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
  const [appState, setAppState] = useState(AppStateEnum.welcome);
  const [userInfo, setUserInfo] = useState(initialValues.userInfo);

  const values = {
    appState,
    setAppState,
    userInfo,
    setUserInfo
  }

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};
