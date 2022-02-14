import express from 'express';
import { ImageController } from '../controllers/index.js';
import { AuthMiddleware } from '../middlewares/index.js';

const router = express.Router();

router.get('/detect', AuthMiddleware, ImageController.detectFace);

export default router;
