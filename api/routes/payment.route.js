import express from 'express'
import { initiateMpesaPayment } from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/payment/mpesa', initiateMpesaPayment);

export default router;