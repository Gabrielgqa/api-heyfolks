const knex = require('../config/database/index');

class CategoryController {
  static async findAll(req, res) {
    const categories = await knex.from('categories').select('id', 'name', 'description');
    return res.render('dashboard/categories', { categories });
  }
}



module.exports = CategoryController