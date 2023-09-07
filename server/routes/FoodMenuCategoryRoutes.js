const express = require("express")
const router = express.Router()
const FoodMenuCategoryControllers = require("../controllers/FoodMenuCategoryControllers")

router.post('/', FoodMenuCategoryControllers.createCategory);

router.get('/', FoodMenuCategoryControllers.getAllCategories);

router.get('/:id', FoodMenuCategoryControllers.getCategoryById);

router.put('/:id', FoodMenuCategoryControllers.updateCategory);

router.delete('/:id', FoodMenuCategoryControllers.deleteCategory);

module.exports = router;