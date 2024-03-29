import express from 'express';
import { getAllInventoryItems, updateInventory } from '../controllers/inventory.controller.js';

const router = express.Router();

router.put('/inventory', updateInventory);
router.get('/getInventory', getAllInventoryItems);

export default router;