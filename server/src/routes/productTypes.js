const { Router } = require('express');
const productTypesController = require('../controllers/productTypesController');

const router = Router();

router.get('/', productTypesController.getProductTypes);

module.exports = router;