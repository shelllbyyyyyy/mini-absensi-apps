const sequelize = require("../config/Database")
const { Model, DataTypes } = require("sequelize")
class Users extends Model {}

Users.init(
  {
    nip: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "Users",
  }
)

module.exports = Users
