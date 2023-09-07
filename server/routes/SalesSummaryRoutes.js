const express = require('express');
const router = express.Router();
const SalesSummaryControllers = require('../controllers/SalesSummaryControllers'); // Adjust path accordingly.

router.post('/', SalesSummaryControllers.createSalesSummary);
router.get('/', SalesSummaryControllers.getAllSalesSummary);
router.get('/:id', SalesSummaryControllers.getSalesSummaryById);
router.put('/:id', SalesSummaryControllers.updateSalesSummary);
router.delete('/:id', SalesSummaryControllers.deleteSalesSummary);
router.delete('/', SalesSummaryControllers.deleteAllSalesSummaries);

module.exports = router;