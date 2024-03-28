// chronicDiseaseAPI.js

import express from 'express';
import { diseasesAndMedications } from './data/chronicDiseases.js';

const router = express.Router();

// Endpoint to get all chronic diseases and their medications
router.get('/chronic-diseases', (req, res) => {
    res.json(diseasesAndMedications);
});

export default router;
