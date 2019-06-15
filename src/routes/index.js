const router = require('express').Router();


router.use(require('./auth'));
router.use(require('./user'));
router.use(require('./users'));

module.exports = router;
