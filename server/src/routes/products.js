const { Router } = require('express');
const productsController = require('../controllers/productsControllers.js');

const router = Router();

router.get('/', productsController.getProducts)
router.put('/:code', productsController.getProducts)

module.exports = router;