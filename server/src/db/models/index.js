const Product = require('./product');
const ProductType = require('./productType');

// associations
Product.belongsTo(ProductType);
ProductType.hasMany(Product);

module.exports = { Product, ProductType };