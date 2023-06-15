const knex = require('../config/database/index');
var bcrypt = require('bcryptjs');
const DateConvertHandler = require('../handlers/date-convert.handler');

class UserController {
  static async home(req, res) {
    return res.render('home');
  }

  static async products(req, res) {
    return res.render('products');
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

  static async signupCreate(req, res) {
    const { name, last_name, birth_date, email, password, is_admin } = req.body;
    const password_hash = bcrypt.hashSync(password, 10);
    
      const formated_date = await DateConvertHandler.convert(birth_date);


    await knex('users').insert({ name, email, password: password_hash, is_admin }).returning("id").then(async function (id) {
        await knex('clients').insert({ name, last_name, birth_date: formated_date, user_id: id[0].id });
    });

    return res.redirect('login')
  }
}



module.exports = UserController