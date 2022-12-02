const router = require('express').Router();

// const apiRoutes = require('./api');
// const userRoutes = require('./blogRoutes');

router.use('/api', require('./userRoutes'));
router.use('/api', require('./blogRoutes'));

module.exports = router;
