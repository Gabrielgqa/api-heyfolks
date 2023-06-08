const express = require('express');
const userController = require('../controllers/user.controller');

const routes = express.Router();

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.remove)

module.exports = routes;