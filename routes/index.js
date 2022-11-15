const { Router } = require('express');

const router = Router();

router.use('/', require('./Medicines.route'))
router.use('/', require('./Category.route'))
module.exports = router;