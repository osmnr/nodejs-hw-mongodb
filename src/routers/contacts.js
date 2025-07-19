import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {createContactSchema, updateContactSchema} from '../validations/contact.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkContactUser } from '../middlewares/checkContactUser.js';
import { upload } from '../middlewares/multer.js';
import { getAllContactsController, 
    getContactByIdController, 
    createContactController, 
    deleteContactByIdController,
    updateContactByIdController } from '../controllers/contacts.js';

const router = Router();

router.use(authenticate);

router.get('/', checkContactUser, ctrlWrapper(getAllContactsController));
router.post('/', checkContactUser, upload.single('photo'), validateBody(createContactSchema), ctrlWrapper(createContactController));
router.post('/register', isValidId, checkContactUser, validateBody(createContactSchema),ctrlWrapper(createContactController));
router.get('/:contactId', isValidId, checkContactUser, ctrlWrapper(getContactByIdController));
router.delete('/:contactId', isValidId, checkContactUser, ctrlWrapper(deleteContactByIdController));
router.patch('/:contactId', isValidId, checkContactUser, upload.single('photo'), validateBody(updateContactSchema), ctrlWrapper(updateContactByIdController));

export default router;



