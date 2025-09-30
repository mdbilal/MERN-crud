const express = require('express');
const router = express.Router();
const { create, list, get, update, destroy } = require('../controllers/product.controller');

router.post('', create);
router.get('', list);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;