import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Main from "./components/Main/Main";

import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Main />
      <Footer />
    </GlobalProvider>
  );
};

export default App;
