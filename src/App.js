import React, { Fragement } from 'react';
import './App.css';

//importing ReactRouter components to use the functionality
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";



import Stuff from './components/Stuff';

const App = () => (
  <div className="App">
    <Stuff />



  </div>


);


export default App;
