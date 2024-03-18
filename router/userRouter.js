const express = require('express');
const middleware = require('../middleware/userMiddelware');
const controller = require('../controller/userController');

const router = express.Router();

router.post('/', middleware.validateRegister, controller.register);

module.exports = router;