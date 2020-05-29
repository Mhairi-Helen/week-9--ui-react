import React, { Fragment } from 'react';
import './App.css';

//importing ReactRouter components to use the functionality
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Challenges from './components/Challenges';
import Quiz from './quiz/Quiz';

const App = () => (

  <Router>
    <div className="App">
      <Header>Practice Makes Perfect</Header>
    </div>

    <Route exact path="/week9-practice-app/challenges" component={Challenges} />

    <Route exact path="/week9-practice-app/quiz" component={Quiz} />

  </Router>
);


export default App;
