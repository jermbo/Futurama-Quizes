import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { Welcome } from "./views/Welcome";
// import { Quiz } from "./views/Quiz";
// import { Summary } from "./views/Summary";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./AppRoutes";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";

interface iQuestion {
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
  id: number | string;
}
const defaultQuestions: iQuestion[] = [];
export const QuestionsContext = React.createContext(defaultQuestions);

const App = () => {
  const [questions, setQuestions] = useState(defaultQuestions);
  // const [subSet, setSubSet] = useState([]);

  // setSubSet(questions.splice(0, 8))

  const fetchQuestions = async () => {
    const resp = await fetch('https://sampleapis.com/futurama/api/questions');
    const data: iQuestion[] = await resp.json();
    setQuestions(data);
  }
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <Router>
      <Header />
      <QuestionsContext.Provider value={
        questions
      }>
        <main>
          <Switch>
            {AppRoutes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </main>
      </QuestionsContext.Provider>
      <Footer />
    </Router>
  );
};

export default App;
