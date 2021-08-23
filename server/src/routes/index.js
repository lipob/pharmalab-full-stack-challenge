const { Router } = require('express');
const products = require('./products.js');
const productTypes = require('./productTypes.js');

const router = Router();

router.use('/products', products);
router.use('/product-types/', productTypes),

router.use((req, res, next) => {
  const error = new Error('404 Not found');
  error.status = 404;
  next(error);
});

module.exports = router;