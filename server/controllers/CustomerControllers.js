const Customer = require("../models/Customer")

const createCustomer = async(req, res) => {
    const { cus_firstname, cus_lastname } = req.body;

    try {
        const customer = await Customer.create({ cus_firstname, cus_lastname });
        res.status(201).json({ message: "Customer added successfully", customer });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllCustomers = async(req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json({ message: "Customers fetched successfully", customers });
    } catch (error) {
        res.status(500).json(error);
    }
}
const getCustomerById = async(req, res) => {
    const { id } = req.params;

    try {
        const customer = await Customer.findOne({ where: { cus_id: id } });
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
const updateCustomer = async(req, res) => {
    const { id } = req.params;
    const { cus_firstname, cus_lastname } = req.body;

    try {
        const customer = await Customer.findOne({ where: { cus_id: id } });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        customer.cus_firstname = cus_firstname;
        customer.cus_lastname = cus_lastname;

        await customer.save();

        res.status(200).json({ message: "Customer updated successfully", customer });

    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteCustomer = async(req, res) => {
    const { id } = req.params;

    try {
        const customer = await Customer.findOne({ where: { cus_id: id } });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        await customer.destroy();

        res.status(200).json({ message: "Customer deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer }