import express from 'express';
import { UserController } from '../controllers/index.js';
import { AuthMiddleware } from '../middlewares/index.js';

const router = express.Router();

router.get('/:userId', AuthMiddleware, UserController.getUser);
router.patch('/:userId/image', AuthMiddleware, UserController.addImageCountToUser);

export default router;
