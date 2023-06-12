const knex = require('../config/database/index');
var bcrypt = require('bcryptjs');

class UserController {
  static async home(req, res) {
    return res.render('home');
  }

  static async contact(req, res) {
    return res.render('contact');
  }
  
  static async login(req, res) {
    return res.render('login');
  }

  static async signup(req, res) {
    return res.render('signup');
  }
}



module.exports = UserController