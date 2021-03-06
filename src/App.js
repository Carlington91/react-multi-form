import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user' component={UserForm} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
