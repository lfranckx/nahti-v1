import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Classes from './components/pages/Classes';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Schedule from './components/pages/Schedule';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <main>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Classes} />
            <Route path='/products' component={About} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/sign-up' component={SignUp} />
          </main>
        </Switch>
      </Router>
    </>
  );
}

export default App;
