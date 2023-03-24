'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userlogin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userlogin.init({
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
   
    // },
  //  user_name: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //   },
  //   user_password: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  user_name: DataTypes.STRING,
  user_password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'userlogin',
    tableName: 'userlogins',
    timestamps: true
  });
  return userlogin;
};