import React from 'react';
import { version } from '../../../package.json';

const Sidebar = ({ mode, toggleMode }) => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="sidebar_logo">
          <h3>noted</h3>
          <span>v {version}</span>
        </div>
        <button
          onClick={() => toggleMode()}
          className="sidebar_switch"
          title="Switch theme"
        >
          <span className={`icon-${mode === 'dark' ? 'sun' : 'moon'}`} />
          {mode === 'dark' ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>
      <div className="sidebar_bottom">
        <p>Created by:</p>
        <p>
          iamdebadipti
          <a href="https://twitter.com/iamdebadipti">
            <span className="icon-twitter" />
          </a>
          <a href="https://github.com/iamdebadipti">
            <span className="icon-github" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
