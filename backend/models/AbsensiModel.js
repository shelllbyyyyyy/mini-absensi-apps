const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/Database")

class AbsensiModels extends Model {}

AbsensiModels.init(
  {
    users_nip: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM("in", "out"),
    },
  },
  {
    createdAt: "Check",
    sequelize,
    modelName: "Absensi",
  }
)

module.exports = AbsensiModels
