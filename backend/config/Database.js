const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("shelby-absensi-database", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

module.exports = sequelize
