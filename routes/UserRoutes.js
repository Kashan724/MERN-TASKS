// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserControllers');

router.post('/', userController.createUser);

module.exports = router;
