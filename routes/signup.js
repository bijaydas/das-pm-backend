'use strict';

const express = require('express');
const router = express.Router();
const {isValidDPMToken} = require('../middlewares/AuthMiddlewares');

router.use(isValidDPMToken);

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Signup'
  })
});

module.exports = router;
