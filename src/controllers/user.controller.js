const knex = require('../config/database/index');
var bcrypt = require('bcryptjs');

class UserController {
  static async create(req, res) {
    return res.render('dashboard/create-user');
  }

  static async store(req, res) {
    const { name, email, password, is_admin } = req.body;
    const password_hash = bcrypt.hashSync(password, 10);


    await knex('users').insert({ name, email, password: password_hash, is_admin });
    return res.redirect('users/all/1')
  }
  
  static async findAll(req, res) {
    let { page } = req.params;

    const quantity = await knex.from('users').count('id');
    const pages = Math.ceil(parseInt(quantity[0].count) / 5);

    if(page > pages)
      page = 1

    const users = await knex.from('users').select('id', 'name', 'email', 'is_admin').offset((page - 1) * 5).limit(5);

    return res.render('dashboard/users', { users, page, pages });
  }
  
  static async find(req, res) {
    const { id } = req.params;

    const user = await knex('users').where({ id }).select('id', 'name', 'email', 'is_admin');
    return res.status(201).json({ user });
  }
  
  static async update(req, res) {
    const { id } = req.params;
    const { email, password, is_admin } = req.body;

    const user = await knex('users').where({ id }).select('email', 'password', 'is_admin');
    const newEmail = (email) ? email : user.email;
    const newPassword = (password) ? bcrypt.hashSync(password, 10) : user.password;
    const newIsAdmin = (is_admin) ? is_admin : user.is_admin;

    await knex('users').where({ id }).update({ email: newEmail, password: newPassword, is_admin: newIsAdmin });
    return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  }
  
  static async remove(req, res) {
    const { id } = req.params;

    await knex('users').where({ id }).del();
    return res.status(200).json({ message: 'Usuário removido com sucesso' });
  }

  static async dashboard(req, res) {
    return res.render('dashboard/index');
  }
}



module.exports = UserController