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

  addProductType = (req, res, next) => {
    const newProductType = req.body;
    return this.productType.create(newProductType)
      .then(newProductType => res.send(newProductType))
      .catch(error => next(error));
  }

  removeProductType = (req, res, next) => {
    const id = req.params.id;
    return this.productType.destroy({
      where: {
        id: Number(id)
      }
    })
    .then(() => res.send(id))
    .catch(error => next(error));
  }

  restoreProductType = (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    return this.productType.restore({
      where: {
        id: Number(id)
      }
    })
    .then(() => res.sendStatus(200))
    .catch(error => next(error));
  }

}

const productTypesController = new ProductTypesCrud(ProductType);

module.exports = productTypesController;