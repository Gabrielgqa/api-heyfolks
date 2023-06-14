const knex = require('../config/database/index');

class CategoryController {
  static async create(req, res) {
    return res.render('dashboard/categories/create-category');
  }

  static async store(req, res) {
    const { name, description } = req.body;

    await knex('categories').insert({ name, description });
    return res.redirect('categories/all/1')
  }

  static async findAll(req, res) {
    let { page } = req.params;

    const quantity = await knex.from('categories').count('id');
    if(parseInt(quantity[0].count) === 0){
      return res.render('dashboard/categories/categories', { categories: [], page: 1, pages: 1 });
    }

    const pages = Math.ceil(parseInt(quantity[0].count) / 5);

    if(page > pages)
      page = 1

    const categories = await knex.from('categories').select('name', 'description').offset((page - 1) * 5).limit(5);

    return res.render('dashboard/categories/categories', { categories, page, pages });
  }
}



module.exports = CategoryController