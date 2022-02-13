import express from 'express';
import { UserController } from '../controllers/index.js';

const router = express.Router();

router.get('/:userId', UserController.getUser);
router.patch('/:userId/image', UserController.addImageCountToUser);

export default router;
