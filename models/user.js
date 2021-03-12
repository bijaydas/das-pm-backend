'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  };

  const fields = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    role: {
      type: DataTypes.ENUM('standard', 'administrator'),
      allowNull: false,
      defaultValue: 'standard',
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    primary_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondary_email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    gender: {
      type: DataTypes.ENUM('m', 'f', 'o'),
      defaultValue: 'o',
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'avatar.png',
    },
    deleted: {
      type: DataTypes.ENUM('0', '1'),
      defaultValue: '0',
    },
    active: {
      type: DataTypes.ENUM('0', '1'),
      defaultValue: '1',
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };

  const options = {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  };
  User.init(fields, options);
  return User;
};
