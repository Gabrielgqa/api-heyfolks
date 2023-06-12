const express = require('express');
const userController = require('../controllers/user.controller');
const categoryController = require('../controllers/category.controller');
const couponController = require('../controllers/coupon.controller');
const homeController = require('../controllers/home.controller');

const routes = express.Router();

routes.get('/create-user', userController.create)
routes.post('/users', userController.store)
routes.get('/users/all/:page', userController.findAll)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.remove)

routes.get('/categories', categoryController.findAll)

routes.get('/coupons', couponController.findAll)

routes.get('/dashboard', userController.dashboard)
routes.get('/', homeController.home);
routes.get('/contato', homeController.contact);
routes.get('/login', homeController.login);
routes.get('/signup', homeController.signup);

module.exports = routes;