import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Components
import Dashboard from './Dashboard';
import Login from './Login';
import QuestionDetail from './QuestionDetail';
import LeaderBoard from './LeaderBoard';
import NavScreen from '../screen/NavScreen';
import HeaderScreen from '../screen/HeaderScreen'
import NewQuestion from './NewQuestion';
import NotFound from './NotFound';



const App = () => {
  return (
    <Router>
      <NavScreen />
      <HeaderScreen />
    </Router>
  );
}

export default App;
