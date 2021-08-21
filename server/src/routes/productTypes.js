const { Router } = require('express');
const productTypesController = require('../controllers/productTypesController');

const router = Router();

router.get('/', productTypesController.getProductTypes);
router.post('/', productTypesController.addProductType);
router.delete('/:id', productTypesController.removeProductType);
router.put('/restore/:id', productTypesController.restoreProductType);

module.exports = router;