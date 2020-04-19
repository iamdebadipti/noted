import React from 'react';
import { Link } from 'react-router-dom';

const Notes = () => {
  return (
    <div>
      here are all the notes... <Link to="/write">writer</Link>
    </div>
  );
};

export default Notes;
