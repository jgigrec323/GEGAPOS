const ItemSales = require('../models/ItemSales');

const createItemSale = async(req, res) => {
    const { sales_id, item_id, quantity, subtotal } = req.body;

    try {
        const itemSale = await ItemSales.create({ sales_id, item_id, quantity, subtotal });
        res.status(201).json({ message: "ItemSale recorded successfully", itemSale });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllItemSales = async(req, res) => {
    try {
        const itemSales = await ItemSales.findAll();
        res.status(200).json({ message: "ItemSales fetched successfully", itemSales });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getItemSaleById = async(req, res) => {
    const { id } = req.params;

    try {
        const itemSale = await ItemSales.findOne({ where: { item_sales_id: id } });
        if (itemSale) {
            res.status(200).json(itemSale);
        } else {
            res.status(404).json({ message: 'ItemSale not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateItemSale = async(req, res) => {
    const { id } = req.params;
    const { sales_id, item_id, quantity, subtotal } = req.body;

    try {
        const itemSale = await ItemSales.findOne({ where: { item_sales_id: id } });

        if (!itemSale) {
            return res.status(404).json({ message: 'ItemSale not found' });
        }

        itemSale.sales_id = sales_id;
        itemSale.item_id = item_id;
        itemSale.quantity = quantity;
        itemSale.subtotal = subtotal;

        await itemSale.save();

        res.status(200).json({ message: "ItemSale updated successfully", itemSale });

    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteItemSale = async(req, res) => {
    const { id } = req.params;

    try {
        const itemSale = await ItemSales.findOne({ where: { item_sales_id: id } });

        if (!itemSale) {
            return res.status(404).json({ message: 'ItemSale not found' });
        }

        await itemSale.destroy();

        res.status(200).json({ message: "ItemSale deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createItemSale, getAllItemSales, getItemSaleById, updateItemSale, deleteItemSale }