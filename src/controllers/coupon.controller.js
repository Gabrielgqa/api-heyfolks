const knex = require('../config/database/index');

class CouponController {
  static async findAll(req, res) {
    const coupons = await knex.from('coupons').select('id', 'name', 'description');
    return res.render('dashboard/coupons', { coupons });
  }
}



module.exports = CouponController