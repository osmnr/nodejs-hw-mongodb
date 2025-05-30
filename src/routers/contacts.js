import { Router } from 'express';
import {getAllContactsController, getContactByIdController, createContactController} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

// endpont that lists all contacts
router.get('/contacts', ctrlWrapper(getAllContactsController));

// endpoint that returns the contact for the given id
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));


router.post('/contacts', ctrlWrapper(createContactController));

export default router;
