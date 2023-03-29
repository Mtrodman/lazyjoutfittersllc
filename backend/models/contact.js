'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(User, {
        foreignKey: 'firstname',
        as: 'firstname',
        })
        this.belongsTo(User, {
          foreignKey: 'lastname',
          as: 'lastname',
          })
        this.belongsTo(User,{
          foreignKey: 'email',
          as:'email'
        })
        this.belongsTo(User,{
          foreignKey: 'phone',
          as:'phone'
        })
        this.belongsTo(User,{
          foreignKey: 'message',
          as:'message'
        })
    }
  }
  contact.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'LazyJoutfittersKS',
    modelName: 'contact',
  });
  return contact;
};