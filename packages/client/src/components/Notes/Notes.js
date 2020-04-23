import React from 'react';
import SingleNote from './SingleNote';

const data = [
  {
    id: 'sdjf',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, minus voluptas?',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eaque magnam voluptas tempora consequuntur consequatur quisquam ab temporibus accusamus officiis.',
    body:
      'Soluta quibusdam beatae veniam dolores, ipsa eveniet suscipit voluptas odit omnis ad illum facere! Vel error, quod impedit nesciunt quos pariatur ipsam delectus ipsa iste quas dolorem rerum laborum nulla, tempore quam eligendi sit. Consequatur illum ipsum quam perferendis unde optio ipsam dolor adipisci itaque fuga. Officia cupiditate nesciunt amet ex assumenda.'
  },
  {
    id: 'uyid',
    title:
      'Consectetur adipisicing elit. Placeat, minus voluptas? Lorem ipsum dolor sit amet! Soluta quibusdam beatae veniam dolores',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eaque magnam voluptas tempora consequuntur consequatur quisquam ab temporibus accusamus officiis.',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam beatae veniam dolores, ipsa eveniet suscipit voluptas odit omnis ad illum facere! Vel error, quod impedit nesciunt quos pariatur ipsam delectus ipsa iste quas dolorem rerum laborum nulla, tempore quam eligendi sit. Consequatur illum ipsum quam perferendis unde optio ipsam dolor adipisci itaque fuga. Officia cupiditate nesciunt amet ex assumenda.'
  }
];

const Notes = () => {
  return (
    <div className="notes">
      <h2 className="notes_heading">My Notes</h2>
      <div className="notes_list">
        {data.map((item) => {
          return <SingleNote key={item.id} note={item} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
