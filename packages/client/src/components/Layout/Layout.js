import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, mode, toggleMode }) => {
  return (
    <div className="app_layout">
      <div className="app_layout_left">
        <Sidebar mode={mode} toggleMode={toggleMode} />
      </div>
      <div className="app_layout_main">{children}</div>
      <div className="app_layout_right" />
    </div>
  );
};

export default Layout;
