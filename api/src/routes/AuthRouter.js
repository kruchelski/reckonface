import express from 'express';
import { AuthController } from '../controllers/index.js';

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/signin', AuthController.signIn);

export default router;
