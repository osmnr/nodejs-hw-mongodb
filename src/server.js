import {env} from './utils/env.js';
import express from 'express';


const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();
  // this middleware help to parse the incoming requests with JSON payloads


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
