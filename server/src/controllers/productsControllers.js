const { Product, ProductType } = require('../db/models');
const { Op } = require('sequelize');

class ProductsCrud {
  constructor(product) {
    this.product = product;
  }

  getProducts = (req, res, next) => {
    const typeOfProduct = req.query.type;

    if ( !typeOfProduct ) {
      return this.product.findAll({
        include: ProductType
      })
        .then(products => res.send(products))
        .catch(error => next(error));
    } else if ( typeOfProduct ) {
      return this.product.findAll({
        include: {
          model: ProductType,
          where: {
            name: {
              [Op.iLike]: `%${typeOfProduct}%`
            }
          }
        }
      })
      .then(products => {
        if (!products.length) {
          return res.send('No encontramos ningún producto de ese tipo');
        } else {
          res.send(products)
        }
      })
      .catch(error => next(error));
    } else {
      return res.send(200)
    }
  }

  updateProduct = (req, res, next) => {
    return
  }

}

const productsControllers = new ProductsCrud(Product);

module.exports = productsControllers;