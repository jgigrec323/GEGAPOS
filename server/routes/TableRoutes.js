const express = require('express');
const router = express.Router();
const TableControllers = require("../controllers/TableControllers");

router.post('/', TableControllers.createTable);
router.get('/', TableControllers.getAllTables);
router.get('/:id', TableControllers.getTableById);
router.put('/:id', TableControllers.updateTable);
router.delete('/:id', TableControllers.deleteTable);

module.exports = router;