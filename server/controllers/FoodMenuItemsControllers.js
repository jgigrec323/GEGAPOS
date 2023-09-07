const FoodMenuItems = require("../models/FoodMenuItems")


const createMenuItem = async(req, res) => {
    const { item_name, item_categorie_id, item_price } = req.body;

    try {
        const menuItem = await FoodMenuItems.create({ item_name, item_categorie_id, item_price });
        res.status(201).json({ message: "Menu item created successfully", menuItem });
    } catch (error) {
        res.status(500).json(error);
    }
}
const getAllMenuItems = async(req, res) => {
    try {
        const menuItems = await FoodMenuItems.findAll();
        res.status(200).json({ message: "Fetched successfully", menuItems });
    } catch (error) {
        res.status(500).json(error);
    }
}
const getMenuItemById = async(req, res) => {
    const { id } = req.params;

    try {
        const menuItem = await FoodMenuItems.findOne({ where: { item_id: id } });
        if (menuItem) {
            res.status(200).json(menuItem);
        } else {
            res.status(404).json({ message: 'Menu item not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
const updateMenuItem = async(req, res) => {
    const { id } = req.params;
    const { item_name, item_categorie_id, item_price } = req.body;

    try {
        const menuItem = await FoodMenuItems.findOne({ where: { item_id: id } });

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        menuItem.item_name = item_name;
        menuItem.item_categorie_id = item_categorie_id;
        menuItem.item_price = item_price;

        await menuItem.save();

        res.status(200).json({ message: "Menu item updated successfully", menuItem });

    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteMenuItem = async(req, res) => {
    const { id } = req.params;

    try {
        const menuItem = await FoodMenuItems.findOne({ where: { item_id: id } });

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        await menuItem.destroy();

        res.status(200).json({ message: "Menu item deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createMenuItem, getAllMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem }