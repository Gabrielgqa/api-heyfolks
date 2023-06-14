const knex = require('../config/database/index');

class CouponController {
  static async create(req, res) {
    return res.render('dashboard/coupons/create-coupon');
  }

  static async store(req, res) {
    const { name, type, value, description } = req.body;

    await knex('coupons').insert({ name, type, value, description });
    return res.redirect('coupons/all/1')
  }

  static async findAll(req, res) {
    let { page } = req.params;

    const quantity = await knex.from('coupons').count('id');
    if(parseInt(quantity[0].count) === 0){
      return res.render('dashboard/coupons/coupons', { coupons: [], page: 1, pages: 1 });
    }

    const pages = Math.ceil(parseInt(quantity[0].count) / 5);

    if(page > pages)
      page = 1

    const coupons = await knex.from('coupons').select('name', 'type', 'value', 'description').offset((page - 1) * 5).limit(5);

    return res.render('dashboard/coupons', { coupons, page, pages });
  }
}



module.exports = CouponController