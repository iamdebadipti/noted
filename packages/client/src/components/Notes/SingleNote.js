import React, { useState, useRef, useEffect } from 'react';
import { ACTION_TOOL_BUTTONS } from '../../utils/constants';

const SingleNote = ({ note }) => {
  const [toolOpen, setToolOpen] = useState(false);
  const dropRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      return setToolOpen(false);
    }
  };

  useEffect(() => {
    if (toolOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toolOpen]);

  return (
    <div className="notes_list_item">
      <div className="notes_list_item_heading">
        <h3>{note.title}</h3>
        <div className="notes_list_action">
          <button onClick={() => (!toolOpen ? setToolOpen(true) : null)}>
            <span className="icon-more-vertical" />
          </button>
          {toolOpen && (
            <div className="notes_list_action_tool" ref={dropRef}>
              {ACTION_TOOL_BUTTONS.map((button, index) => {
                return (
                  <button
                    key={index}
                    title={button.title}
                    onClick={() => console.log(button.action, note.id)}
                  >
                    <span className={`icon-${button.icon}`} />
                    {button.title}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="notes_list_item_body">
        <p>{note.excerpt}</p>
      </div>
    </div>
  );
};

export default SingleNote;
