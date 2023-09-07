const Orders = require('../models/Order');

const createOrder = async(req, res) => {
    const { customer_id, item_bought_id, created_at, quantity } = req.body;


    try {
        const order = await Orders.create({ customer_id, item_bought_id, "created_at": created_at || new Date(), quantity });
        res.status(201).json({ message: "Order recorded successfully", order });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllOrders = async(req, res) => {
    try {
        const orders = await Orders.findAll();
        res.status(200).json({ message: "Orders fetched successfully", orders });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getOrderById = async(req, res) => {
    const { id } = req.params;

    try {
        const order = await Orders.findOne({ where: { order_id: id } });
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateOrder = async(req, res) => {
    const { id } = req.params;
    const { customer_id, item_bought_id, created_at, quantity } = req.body;

    try {
        const order = await Orders.findOne({ where: { order_id: id } });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.customer_id = customer_id;
        order.item_bought_id = item_bought_id;
        order.created_at = created_at;
        order.quantity = quantity;

        await order.save();

        res.status(200).json({ message: "Order updated successfully", order });

    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteOrder = async(req, res) => {
    const { id } = req.params;

    try {
        const order = await Orders.findOne({ where: { order_id: id } });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        await order.destroy();

        res.status(200).json({ message: "Order deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder }