import { Router } from 'express';
import { registerUserSchema } from '../validations/auth.js';
import { loginUserSchema } from '../validations/auth.js';
import { registerUserController, loginUserController } from '../controllers/auth.js';
import { logoutUserController } from '../controllers/auth.js';
import { refreshUserSessionController } from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { sendResetEmailSchema } from '../validations/auth.js';
import { sendResetEmailController } from '../controllers/auth.js';
import { resetPasswordSchema } from '../validations/auth.js';
import { resetPasswordController } from '../controllers/auth.js';

const router = Router();

router.post('/register', validateBody(registerUserSchema), ctrlWrapper(registerUserController));
router.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController));
router.post('/logout', ctrlWrapper(logoutUserController));
router.post('/refresh', ctrlWrapper(refreshUserSessionController));
router.post('/send-reset-email', validateBody(sendResetEmailSchema), ctrlWrapper(sendResetEmailController));
router.post('/reset-password', validateBody(resetPasswordSchema), ctrlWrapper(resetPasswordController));

export default router;