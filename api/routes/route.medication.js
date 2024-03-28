import express from 'express';
import { createMedication, getMedication } from '../controllers/medication.controller.js';

const router = express.Router();

router.post('/add-medication', createMedication);
router.get('/medications', getMedication)

export default router;