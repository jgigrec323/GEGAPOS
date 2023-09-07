const SalesSummary = require('../models/SalesSummary');

const createSalesSummary = async(req, res) => {
    const { date, user_id, order_id, total_amount, payment_method } = req.body;

    try {
        const sales = await SalesSummary.create({ "date": date || new Date(), user_id, order_id, total_amount, payment_method });
        res.status(201).json({ message: "Sales summary recorded successfully", sales });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllSalesSummary = async(req, res) => {
    try {
        const sales = await SalesSummary.findAll();
        res.status(200).json({ message: "Sales summaries fetched successfully", sales });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getSalesSummaryById = async(req, res) => {
    const { id } = req.params;

    try {
        const sales = await SalesSummary.findOne({ where: { sales_id: id } });
        if (sales) {
            res.status(200).json(sales);
        } else {
            res.status(404).json({ message: 'Sales summary not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateSalesSummary = async(req, res) => {
    const { id } = req.params;
    const { date, user_id, order_id, total_amount, payment_method } = req.body;

    try {
        const sales = await SalesSummary.findOne({ where: { sales_id: id } });

        if (!sales) {
            return res.status(404).json({ message: 'Sales summary not found' });
        }

        sales.date = date || new Date();
        sales.user_id = user_id;
        sales.order_id = order_id;
        sales.total_amount = total_amount;
        sales.payment_method = payment_method;

        await sales.save();

        res.status(200).json({ message: "Sales summary updated successfully", sales });

    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteSalesSummary = async(req, res) => {
    const { id } = req.params;

    try {
        const sales = await SalesSummary.findOne({ where: { sales_id: id } });

        if (!sales) {
            return res.status(404).json({ message: 'Sales summary not found' });
        }

        await sales.destroy();

        res.status(200).json({ message: "Sales summary deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteAllSalesSummaries = async(req, res) => {
    try {
        await SalesSummary.destroy({ where: {} });
        res.status(200).json({ message: "All sales summaries deleted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createSalesSummary,
    getAllSalesSummary,
    getSalesSummaryById,
    updateSalesSummary,
    deleteAllSalesSummaries,
    deleteSalesSummary
}