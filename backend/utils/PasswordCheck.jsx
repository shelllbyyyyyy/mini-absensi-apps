const bcrypt = require("bcrypt")
const user = require("../models/UserModel")

const passwordCheck = async (nip, password) => {
  const userData = await user.findOne({ where: { nip: nip } })
  const compare = await bcrypt.compare(password, userData.password)
  return { compare, userData }
}

module.exports = { passwordCheck }
