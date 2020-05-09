import mongoose from 'mongoose';

export const Note = mongoose.model('Note', {
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
});
