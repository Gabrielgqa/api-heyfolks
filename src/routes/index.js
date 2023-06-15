const express = require('express');
const userController = require('../controllers/user.controller');
const categoryController = require('../controllers/category.controller');
const couponController = require('../controllers/coupon.controller');
const homeController = require('../controllers/home.controller');
const clientsController = require('../controllers/client.controller');

const routes = express.Router();

routes.get('/create-user', userController.create)
routes.post('/users', userController.store)
routes.get('/users/all/:page', userController.findAll)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.remove)

routes.get('/clients/all/:page', clientsController.findAll)

routes.get('/create-category', categoryController.create)
routes.get('/categories/all/:page', categoryController.findAll)
routes.post('/categories', categoryController.store)

routes.get('/create-coupon', couponController.create)
routes.post('/coupons', couponController.store)
routes.get('/coupons/all/:page', couponController.findAll)

routes.get('/dashboard', userController.dashboard)
routes.get('/', homeController.home);
routes.get('/produtos', homeController.products);
routes.get('/contato', homeController.contact);
routes.get('/login', homeController.login);
routes.get('/signup', homeController.signup);
routes.post('/signup', homeController.signupCreate);

module.exports = routes;