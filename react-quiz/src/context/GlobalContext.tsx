import React, { createContext, Dispatch, useState } from 'react';
import { AppStateEnum } from '../utils/enums';

interface AppState {
  appState: AppStateEnum;
  setAppState: Dispatch<AppStateEnum>;
}

export const initialValues: AppState = {
  appState: AppStateEnum.welcome,
  setAppState: () => {}
};

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
  const [appState, setAppState] = useState(AppStateEnum.welcome);

  const values = {
    appState,
    setAppState
  }

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};
