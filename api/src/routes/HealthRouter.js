import express from 'express';
import { HealthController } from '../controllers/index.js';

const router = express.Router();

router.get('/', HealthController.checkHealth);

export default router;
