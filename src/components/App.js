import React, {useEffect} from 'react';
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

// Utils
import ProtectedRoute from '../utils/protedtedRoute';

// Redux
import { useDispatch} from 'react-redux';
import {handleInitialData} from '../actions/shared'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])
  return (
    <Router>
      <NavScreen />
      <HeaderScreen />
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/add' component={NewQuestion} />
        <ProtectedRoute path='/question/:id' component={QuestionDetail} />
        <ProtectedRoute path='/leaderboard' component={LeaderBoard} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
