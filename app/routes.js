import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import Profile from './components/Account/Profile';
import Forgot from './components/Account/Forgot';
import Reset from './components/Account/Reset';
import Result from './components/Quiz/Result';
import MainTest from './components/MainTest';
import Questions from './components/design/Questions'

import AdminDashboard from './components/Admin/AdminDashboard';
import QuestionManage from './components/Admin/QuestionManage';
import ResultManage from './components/Admin/ResultManage';

export default function getRoutes(store) {
  const ensureAuthenticated = (nextState, replace) => {
    if (!store.getState().auth.token) {
      replace('/login');
    }
  };
  const skipIfAuthenticated = (nextState, replace) => {
    if (store.getState().auth.token) {
      replace('/');
    }
  };
  const clearMessages = () => {
    store.dispatch({
      type: 'CLEAR_MESSAGES'
    });
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} onLeave={clearMessages}/>
      <Route path="/contact" component={Contact} onLeave={clearMessages}/>
      <Route path="/result/:userid" component={Result} onLeave={clearMessages}/>
      <Route path="/login" component={Login} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
      <Route path="/signup" component={Signup} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
      <Route path="/account" component={Profile} onEnter={ensureAuthenticated} onLeave={clearMessages}/>
      <Route path="/forgot" component={Forgot} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
      <Route path='/reset/:token' component={Reset} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
      <Route path='/questions' component={Questions} onLeave={clearMessages}/>
      <Route path='/metabit-test' component={MainTest} onLeave={clearMessages}/>
      <Route path='/admin/dashboard' component={AdminDashboard} onEnter={ensureAuthenticated} onLeave={clearMessages} />
      <Route path='/admin/questionManage' component={QuestionManage} onEnter={ensureAuthenticated} onLeave={clearMessages} />
      <Route path='/admin/resultManage' component={ResultManage} onEnter={ensureAuthenticated} onLeave={clearMessages} />
      <Route path="*" component={NotFound} onLeave={clearMessages}/>
    </Route>
  );
}
