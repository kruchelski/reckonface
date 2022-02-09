import express from 'express';
import { ImageController } from '../controllers/index.js';

const router = express.Router();

router.get('/detect', ImageController.detectFace);

export default router;
