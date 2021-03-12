'use strict';

const express = require('express');
const router = express.Router();
const {isValidDXToken} = require('../middlewares/authMiddlewares');
// const {quickSignupValidation} = require('../middlewares/requestsMiddlewares');
const {User, sessions} = require('../models');
const {comparePassword} = require('../system/hash');
const {Op} = require('sequelize');
const uuid = require('uuid');

// Overwall API auth with Das Password Manager Token
router.use(isValidDXToken);

router.post('/', async (req, res) => {
  const {email, password} = req.body;
  const result = await User.findOne({
    where: {
      [Op.and]: [
        {primary_email: email},
        {active: '1'},
      ],
    },
  });

  if (!result) {
    return res.status(401).json({
      message: 'Invalid credentials',
      status: 401,
    });
  }

  if (!comparePassword(password, result.password)) {
    return res.status(401).json({
      message: 'Invalid credentials',
      status: 401,
    });
  }
  const sessionId = uuid.v4();
  await sessions.create({
    user_id: result.id,
    session_id: sessionId,
    login_at: new Date(),
    logout_at: null,
  });
  return res.status(200).json({
    message: 'Login successful',
    status: 200,
    data: {
      session_id: sessionId,
    },
  });
});

module.exports = router;
