const knex = require('../config/database/index');
var bcrypt = require('bcryptjs');

class UserController {
  static async create(req, res) {
    const { name, email, password } = req.body;
    const password_hash = bcrypt.hashSync(password, 10);

    await knex('users').insert({ name, email, password: password_hash });
    return res.status(201).json({ message: 'Usuário adicionado com sucesso' });
  }
  
  static async findAll(req, res) {
    const users = await knex.from('users').select('id', 'name', 'email', 'is_admin');
    return res.render('dashboard/users', { users })
    //return res.status(200).json({ users });
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
    return res.render('dashboard/index')
    //return res.status(200).json({ users });
  }

  static async home(req, res) {
    return res.render('home')
    //return res.status(200).json({ users });
  }

  static async products(req, res) {
    return res.render('products')
    //return res.status(200).json({ users });
  }
}



module.exports = UserController