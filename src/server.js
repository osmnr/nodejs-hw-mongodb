import express from 'express';
import {env} from './utils/env.js';
import pino from 'pino-http';
import cors from 'cors';
import contactsRouter from './routers/contacts.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();
  // this middleware help to parse the incoming requests with JSON payloads
  app.use(express.json());
  app.use(cors());
  app.use(pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );
  

  app.use(contactsRouter);


  // if any undefined url/route called, return below not found response
  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
