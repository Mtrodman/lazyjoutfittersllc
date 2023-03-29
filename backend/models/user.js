'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate({ Comment }) {
      this.hasMany(Contact, { foreignKey: 'firstname', as: 'firstname' })
      this.hasMany(Contact, { foreignKey: 'lastname', as: 'lastname'})
      this.hasMany(Contact, { foreignKey: 'email', as: 'email'})
      this.hasMany(Contact, { foreignKey: 'phone', as: 'phone'})
      this.hasMany(Contact, { foreignKey: 'message', as: 'message'})
    }
    
  };
  Users.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Users',
  });
  return Users;
};

