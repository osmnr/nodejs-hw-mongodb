import { Router } from 'express';
import {getAllContactsController, getContactByIdController} from '../controllers/contacts.js';


const router = Router();

// endpont that lists all contacts
router.get('/contacts', getAllContactsController);

// endpoint that returns the contact for the given id
router.get('/contacts/:contactId', getContactByIdController);

export default router;
