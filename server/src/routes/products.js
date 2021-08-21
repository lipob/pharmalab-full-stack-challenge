const { Router } = require('express');
const productsController = require('../controllers/productsControllers.js');

const router = Router();

router.get('/', productsController.getProducts);
router.post('/', productsController.addProduct);

module.exports = router;