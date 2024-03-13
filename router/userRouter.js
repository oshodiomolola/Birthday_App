const express = require('express');
const middleware = require('../middleware/UserMiddleware');
const controller = require('../controller/UserController');

const router = express.Router();

router.post('/', middleware.validateRegister, controller.register);

module.exports = router;