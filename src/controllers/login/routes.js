const express = require('express');
const router = express.Router();
const userController = require('./controller');
const {checktoken} = require('../../oauth/authorization');

router.get('/auth/verify', checktoken, userController.verify)

router.post('/auth/registrar', userController.register );
router.post('/auth/usuarios', userController.readAll );
router.delete('/auth/eliminar/:id', userController.delete );

router.post('/auth/login', userController.login );


module.exports = router;