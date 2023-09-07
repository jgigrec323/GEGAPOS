const Table = require('../models/RestaurantTable');

const createTable = async(req, res) => {
    const { table_section, table_number, is_table_free, customer_on_table_id } = req.body;

    try {
        const table = await Table.create({ table_section, table_number, is_table_free, customer_on_table_id });
        res.status(201).json({ message: "Table added successfully", table });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllTables = async(req, res) => {
    try {
        const tables = await Table.findAll();
        res.status(200).json({ message: "All tables fetched successfully", tables });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getTableById = async(req, res) => {
    const { id } = req.params;

    try {
        const table = await Table.findOne({ where: { table_id: id } });
        if (table) {
            res.status(200).json(table);
        } else {
            res.status(404).json({ message: 'Table not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateTable = async(req, res) => {
    const { id } = req.params;
    const { table_section, table_number, is_table_free, customer_on_table_id } = req.body;

    try {
        const table = await Table.findOne({ where: { table_id: id } });

        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }

        table.table_section = table_section;
        table.table_number = table_number;
        table.is_table_free = is_table_free;
        table.customer_on_table_id = customer_on_table_id;

        await table.save();

        res.status(200).json({ message: "Table updated successfully", table });

    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteTable = async(req, res) => {
    const { id } = req.params;

    try {
        const table = await Table.findOne({ where: { table_id: id } });

        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }

        await table.destroy();

        res.status(200).json({ message: "Table deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createTable, getAllTables, getTableById, updateTable, deleteTable }