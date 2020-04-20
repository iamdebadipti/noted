import React from 'react';
// import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import Toolbar from './Toolbar';
// import { useParams } from 'react-router-dom';

const Write = () => {
  // const param = useParams();

  return (
    <div className="write">
      <div className="write_editor">
        <TextareaAutosize
          placeholder="Note Title"
          className="write_editor_title"
          maxRows={3}
        />
        <TextareaAutosize
          placeholder="Start writing here! Everything you write here will be saved automatically. When you'll come back your text will still be here. Share your note with your friends or anyone with an unique url. Just select ‘Copy URL’ option on your right."
          className="write_editor_body"
          minRows={12}
        />
      </div>
      <Toolbar />
    </div>
  );
};

export default Write;
