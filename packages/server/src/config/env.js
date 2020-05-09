import { config } from 'dotenv';

// load .env config
config();

// environment variables
export const ENV = {
  db: process.env.MONGODB_URL,
  port: process.env.PORT || 4000
};
