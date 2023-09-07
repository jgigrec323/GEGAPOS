const express = require("express")
const router = express.Router()
const CustomerControllers = require("../controllers/CustomerControllers")

router.post('/', CustomerControllers.createCustomer);
router.get('/', CustomerControllers.getAllCustomers);
router.get('/:id', CustomerControllers.getCustomerById);
router.put('/:id', CustomerControllers.updateCustomer);
router.delete('/:id', CustomerControllers.deleteCustomer);

module.exports = router;