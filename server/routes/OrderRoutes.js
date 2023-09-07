// routes/ordersRoutes.js

const express = require('express');
const router = express.Router();
const OrderControllers = require('../controllers/OrderControllers');

router.post('/', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrders);
router.get('/:id', OrderControllers.getOrderById);
router.put('/:id', OrderControllers.updateOrder);
router.delete('/:id', OrderControllers.deleteOrder);

module.exports = router;