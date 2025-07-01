import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllContactsController, 
    getContactByIdController, 
    createContactController, 
    deleteContactByIdController,
    updateContactByIdController } from '../controllers/contacts.js';

import { validateBody } from '../middlewares/validateBody.js';
import {createContactSchema} from '../validations/contact.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactByIdController));

router.patch('/contacts/:contactId', isValidId, validateBody(createContactSchema), ctrlWrapper(updateContactByIdController));

export default router;
