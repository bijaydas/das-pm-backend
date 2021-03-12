'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sessions extends Model {
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
    session_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    login_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    logout_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  };

  const options = {
    sequelize,
    modelName: 'sessions',
    tableName: 'sessions',
    timestamps: false,
  };
  sessions.init(fields, options);
  return sessions;
};
