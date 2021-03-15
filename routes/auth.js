'use strict';

const express = require('express');
const router = express.Router();
const {isValidDXToken} = require('../middlewares/authMiddlewares');
const {quickSignupValidation,loginFieldsValidation} = require('../middlewares/requestsMiddlewares');
const {User, sessions} = require('../models');
const {hashPassword, comparePassword} = require('../system/hash');
const {Op} = require('sequelize');
const uuid = require('uuid');

// Overwall API auth with Das Password Manager Token
router.use(isValidDXToken);

router.post('/signup/quick', quickSignupValidation, async (req, res) => {
  const {email, password} = req.body;
  const emailExists = await User.findOne({
    where: {
      [Op.and]: [
        {
          primary_email: email,
        },
        {
          active: '1',
        },
      ],
    },
  });

  if (emailExists) {
    return res.status(401).json({
      message: 'Email already exists',
      status: 401,
    });
  }

  const payload = {
    primary_email: email,
    password: hashPassword(password),
    created_at: new Date(),
    updated_at: new Date(),
  };

  try {
    const result = await User.create(payload);
    return res.status(200).json({
      message: 'Sign up successful',
      status: 200,
      data: {
        email: result.primary_email,
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: 'Unable to sign up',
      status: 401,
      error,
    });
  };
});

router.post('/login', loginFieldsValidation, async (req, res) => {
  const {email, password} = req.body;
  const attributes = {
    attributes: {
      exclude: ['id', 'deleted', 'active'],
    },
  };
  const result = await User.findOne(attributes, {
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
  result['session_id'] = sessionId;
  const string = JSON.stringify(result);
  const data = JSON.parse(string);
  delete data.password;
  data['session_id'] = sessionId;
  return res.status(200).json({
    message: 'Login successful',
    status: 200,
    data,
  });
});

router.get('/logout/:sessionId', async (req, res) => {
  await sessions.update({logout_at: new Date()}, {
    where: {
      session_id: req.params.sessionId,
    },
  });
  return res.status(200).json({
    message: 'Successfully logged out',
  });
});

module.exports = router;
