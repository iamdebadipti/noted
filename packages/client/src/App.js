import React, { useState, useEffect } from 'react';
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
import Layout from './components/Layout';
import { useDarkHook } from 'use-dark-hook';

function App() {
  const [noteExists, setNoteExists] = useState(null);
  const [mode, toggleMode] = useDarkHook();

  useEffect(() => {
    // checking if notes are already available
    setTimeout(() => {
      setNoteExists(true);
    }, 200);
  }, []);

  // app loading state -- checking notes availability
  if (noteExists === null) {
    return <span>loading app...</span>;
  }

  return (
    <Layout mode={mode} toggleMode={() => toggleMode()}>
      <Router>
        <Switch>
          <Route exact path="/write" component={Write} />
          <Route exact path="/notes" component={Notes} />
          {/* redirect to respective paths depending on notes availability */}
          <Route
            exact
            path="/"
            render={() =>
              noteExists ? <Redirect to="/notes" /> : <Redirect to="/write" />
            }
          />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
