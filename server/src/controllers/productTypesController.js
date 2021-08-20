const { ProductType } = require('../db/models');

class ProductTypesCrud {
  constructor(productType) {
    this.productType = productType;
  }

  getProductTypes = (req, res, next) => {
    return this.productType.findAll()
      .then(types => res.send(types))
      .catch(error => next(error));
  }

}

const productTypesController = new ProductTypesCrud(ProductType);

module.exports = productTypesController;