import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import DetailComponent from './components/DetailComponent';
import ListComponent from './components/ListComponent';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/create" exact>
            <CreateComponent />
          </Route>
          <Route path="/:id">
            <DetailComponent />
          </Route>
          <Route path="/" exact>
            <ListComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
