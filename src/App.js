import React from 'react';
import Home from './pages/Home';
import Directory from './pages/Directory';
import About from './pages/About';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return(
    <div>
      < Navbar />
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/directory" component={Directory}/>
        <Route path="/about" component={About}/>
        <Route path="" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
