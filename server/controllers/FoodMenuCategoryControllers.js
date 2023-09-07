const FoodMenuCategory = require("../models/FoodMenuCategory")

const createCategory = async(req, res) => {
    const { menu_name, menu_icon, number_items } = req.body;

    try {
        const category = await FoodMenuCategory.create({ menu_name, menu_icon, number_items });
        res.status(201).json({ message: "Category created successfully", category });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllCategories = async(req, res) => {
    try {
        const categories = await FoodMenuCategory.findAll();
        res.status(200).json({ message: "Fetched successfully", categories });
    } catch (error) {
        res.status(500).json(error);
    }
}
const getCategoryById = async(req, res) => {
    const { id } = req.params;

    try {
        const category = await FoodMenuCategory.findOne({ where: { foods_menu_id: id } });
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
const updateCategory = async(req, res) => {
    const { id } = req.params;
    const { menu_name, menu_icon, number_items } = req.body;

    try {
        const category = await FoodMenuCategory.findOne({ where: { foods_menu_id: id } });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        category.menu_name = menu_name;
        category.menu_icon = menu_icon;
        category.number_items = number_items;

        await category.save();

        res.status(200).json({ message: "Category updated successfully", category });

    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteCategory = async(req, res) => {
    const { id } = req.params;

    try {
        const category = await FoodMenuCategory.findOne({ where: { foods_menu_id: id } });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        await category.destroy();

        res.status(200).json({ message: "Category deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}