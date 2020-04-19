import React, { useState, useEffect } from 'react';
// stylesheets
import './assets/icons/style.css';
import './styles/main.scss';
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Write from './components/Write';
import Notes from './components/Notes';

function App() {
  const [noteExists, setNoteExists] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNoteExists(true);
    }, 1000);
  }, []);

  console.log(noteExists);

  if (noteExists === null) {
    return <span>loading app...</span>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/write" component={Write} />
        <Route exact path="/notes" component={Notes} />
        <Route
          exact
          path="/"
          render={() =>
            noteExists ? <Redirect to="/notes" /> : <Redirect to="/write" />
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
