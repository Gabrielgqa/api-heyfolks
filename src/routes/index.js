const express = require('express');
const userController = require('../controllers/user.controller');
const categoryController = require('../controllers/category.controller');
const couponController = require('../controllers/coupon.controller');

const routes = express.Router();

routes.get('/create-user', userController.create)
routes.post('/users', userController.store)
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.remove)

routes.get('/categories', categoryController.findAll)

routes.get('/coupons', couponController.findAll)

routes.get('/dashboard', userController.dashboard)
routes.get('/', userController.home)
routes.get('/contato', userController.contact)

module.exports = routes;