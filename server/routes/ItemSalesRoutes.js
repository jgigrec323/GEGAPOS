const express = require('express');
const router = express.Router();
const ItemSalesControllers = require("../controllers/ItemSalesControllers")

router.post('/', ItemSalesControllers.createItemSale);
router.get('/', ItemSalesControllers.getAllItemSales);
router.get('/:id', ItemSalesControllers.getItemSaleById);
router.put('/:id', ItemSalesControllers.updateItemSale);
router.delete('/:id', ItemSalesControllers.deleteItemSale);

module.exports = router;