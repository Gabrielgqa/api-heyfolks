const knex = require('../config/database/index');
var bcrypt = require('bcryptjs');

class ClientController {
  static async findAll(req, res) {
    let { page } = req.params;

    const quantity = await knex.from('clients').count('id');
    const pages = Math.ceil(parseInt(quantity[0].count) / 5);

    if(page > pages)
      page = 1

    const clients = await knex.from('clients').select('id', 'name', 'last_name', 'birth_date', 'active', 'user_id').offset((page - 1) * 5).limit(5);
    const email = await knex('users').where({ id: clients[0].user_id }).select('email');

    return res.render('dashboard/clients/clients', { clients, email: email[0].email, page, pages });
  }
}

module.exports = ClientController