import React from 'react';
import { useHistory } from 'react-router-dom';
import SingleNote from './SingleNote';

const data = [
  {
    id: 'sdjf',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, minus voluptas?',
    body:
      'Soluta quibusdam beatae veniam dolores, ipsa eveniet suscipit voluptas odit omnis ad illum facere! Vel error, quod impedit nesciunt quos pariatur ipsam delectus ipsa iste quas dolorem rerum laborum nulla, tempore quam eligendi sit. Consequatur illum ipsum quam perferendis unde optio ipsam dolor adipisci itaque fuga. Officia cupiditate nesciunt amet ex assumenda.'
  },
  {
    id: 'uyid',
    title:
      'Consectetur adipisicing elit. Placeat, minus voluptas? Lorem ipsum dolor sit amet! Soluta quibusdam beatae veniam dolores',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam beatae veniam dolores, ipsa eveniet suscipit voluptas odit omnis ad illum facere! Vel error, quod impedit nesciunt quos pariatur ipsam delectus ipsa iste quas dolorem rerum laborum nulla, tempore quam eligendi sit. Consequatur illum ipsum quam perferendis unde optio ipsam dolor adipisci itaque fuga. Officia cupiditate nesciunt amet ex assumenda.'
  }
];

const Notes = () => {
  const history = useHistory();

  return (
    <div className="notes">
      <h2 className="notes_heading">My Notes</h2>
      <div className="notes_list">
        {data.map((item) => {
          return (
            <SingleNote
              key={item.id}
              note={item}
              handleEditClick={(id) => history.push(`/write/${id}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
