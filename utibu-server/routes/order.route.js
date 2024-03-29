import express from 'express'
import { confirmOrder, createOrder, processOrder } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/order', createOrder);
router.put('/:orderId/process', processOrder);
router.put('/:orderId/confirm', confirmOrder)

export default router