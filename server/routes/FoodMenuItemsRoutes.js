const express = require("express")
const router = express.Router()
const FoodMenuItemControllers = require("../controllers/FoodMenuItemsControllers")

router.post('/', FoodMenuItemControllers.createMenuItem);
router.get('/', FoodMenuItemControllers.getAllMenuItems);
router.get('/:id', FoodMenuItemControllers.getMenuItemById);
router.get('/category/:id', FoodMenuItemControllers.getMenuItemByCategoryId)
router.put('/:id', FoodMenuItemControllers.updateMenuItem);
router.delete('/:id', FoodMenuItemControllers.deleteMenuItem);

module.exports = router;