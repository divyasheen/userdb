import express from 'express';
import { createOrder } from '../controllers/orders.js';
const router = express.Router();

router.post('/add', createOrder);



export default router;