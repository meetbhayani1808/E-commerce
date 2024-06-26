const express = require('express');
const router = express.Router();

const {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,
} = require('../controllers/orderController');

const { authenticateUser, authorizeUser } = require('../middleware/authentication');

router.route('/').get(authenticateUser, authorizeUser('admin'), getAllOrders).post(authenticateUser, createOrder);

router.route('/showAllMyOrder').get(authenticateUser, getCurrentUserOrders);

router.route('/:id').patch(authenticateUser, updateOrder).get(authenticateUser, getSingleOrder);

module.exports = router;
