const express = require('express');
const router = express.Router();
const postsController = require('./controller');
const {checktoken} = require('../../oauth/authorization');

router.post('/posts', checktoken,  postsController.insert)
router.get('/posts', checktoken,  postsController.readAll)
router.get('/posts/:id', checktoken,  postsController.readFindById)
router.put('/posts/:id', checktoken,  postsController.update)
router.delete('/posts/:id', checktoken,  postsController.delete)
module.exports = router;