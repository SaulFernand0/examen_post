const express = require('express');
const router = express.Router();
const login = require('../controllers/login/routes');
const post = require('../controllers/post/routes');

router.use('/', login);
router.use('/', post);
module.exports = router;