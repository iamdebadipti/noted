import { Note } from './models/Note';
import { nanoid } from 'nanoid/async';

// resolver functions for the schema fields
export const resolvers = {
  Query: {
    notes: () => Note.find()
  },

  Mutation: {
    createNote: async (_, { title, paragraph }) => {
      const path = await nanoid();
      const note = new Note({ title, paragraph, path });
      await note.save();
      return note;
    }
  }
};
