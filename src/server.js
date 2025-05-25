import express from 'express';
import {env} from './utils/env.js';
import pino from 'pino-http';
import cors from 'cors';
import {getAllContacts, getConctactById} from './services/contact.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();
  // this middleware help to parse the incoming requests with JSON payloads
  app.use(express.json());
  app.use(cors());
  
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );
  
 
  // endpont that lists all contacts

  app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();
    console.log("\n", contacts, "\n");
    res.status(200).json(
      {
        status:200,
        message: "Successfully found contacts!",
        data: contacts
      }
    )
  })

  // endpoint that returns the contact for the given id
  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const contact = await getConctactById(contactId)

    if (!contact){
      res.status(404).json({
        message: 'Contact not found'
      })
      return
    }

    res.status(200).json(
      {
        status:200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact
      }
    )
  })

  // if any undefined url requested, return not found
  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
