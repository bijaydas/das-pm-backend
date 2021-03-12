'use strict';

const express = require('express');
const router = express.Router();
const {isValidDXToken} = require('../middlewares/authMiddlewares');
const {quickSignupValidation} = require('../middlewares/requestsMiddlewares');
const {User} = require('../models');
const {hashPassword} = require('../system/hash');
const {Op} = require('sequelize');

// Overwall API auth with Das Password Manager Token
router.use(isValidDXToken);

router.post('/quick', quickSignupValidation, async (req, res) => {
  const {email, password} = req.body;
  const emailExists = await User.findOne({
    where: {
      [Op.and]: [
        {primary_email: email},
        {active: '1'},
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

module.exports = router;
