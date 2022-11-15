const { Router } = require('express');

const router = Router();

router.use('/', require('./Medicines.route'))
module.exports = router;