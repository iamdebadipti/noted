import React from 'react';
import { TOOL_BUTTONS } from '../../utils/constants';

const Toolbar = () => {
  return (
    <div className="write_tools">
      {TOOL_BUTTONS.map((item, index) => {
        return (
          <button key={index} className="write_tools_button" title={item.title}>
            <span className={`icon-${item.icon}`} />
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;
