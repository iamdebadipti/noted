import React, { useState, useRef, useEffect } from 'react';

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
        <button onClick={() => (!toolOpen ? setToolOpen(true) : null)}>
          <span className="icon-more-vertical" />
        </button>
        {toolOpen && (
          <div className="notes_list_tool" ref={dropRef}>
            toolbox here
          </div>
        )}
      </div>
      <div className="notes_list_item_heading">
        <p>{note.excerpt}</p>
      </div>
    </div>
  );
};

export default SingleNote;
