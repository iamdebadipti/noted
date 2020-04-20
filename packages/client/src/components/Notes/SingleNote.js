import React from 'react';

const SingleNote = ({ note, handleEditClick }) => {
  return (
    <div className="notes_list_item">
      <h3>{note.title}</h3>
      {/* <p>{note.body}</p> */}
      <button onClick={() => handleEditClick(note.id)}>edit</button>
    </div>
  );
};

export default SingleNote;
