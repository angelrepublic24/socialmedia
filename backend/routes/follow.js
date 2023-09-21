const express = require('express');
const router = express.Router();
const FolllowController = require('../controllers/followController');
const verifyToken = require('../middlewares/auth')

router.post('/save', verifyToken.auth, FolllowController.createFollow)

module.exports = router