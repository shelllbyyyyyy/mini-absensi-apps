const users = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { passwordCheck } = require("../utils/PasswordCheck.jsx")

const getUsers = async (req, res) => {
  const response = await users.findAll()
  res.status(200).json({
    users: response,
    msg: "List of the users",
  })
}

const createUser = async (req, res) => {
  const { nip, name, password } = req.body
  const encryptedPassword = await bcrypt.hash(password, 5)
  try {
    const response = await users.create({
      nip,
      name,
      password: encryptedPassword,
    })
    res.status(200).json({
      users: response,
      msg: "Users created successfully...!",
    })
  } catch (error) {
    res.status(400).json({
      error: "NIP already in use...!",
    })
  }
}
const updateUser = async (req, res) => {
  const { nip, name, password, newPassword } = req.body
  const check = await passwordCheck(nip, password)
  const encryptedPassword = await bcrypt.hash(newPassword, 5)

  try {
    if (check.compare !== true)
      return res.status(400).json({ msg: "sorry wrong password...!" })
    users.update(
      {
        name,
        password: encryptedPassword,
      },
      {
        where: { nip: nip },
      }
    )
    res.status(200).json({
      msg: "Users update has been success...!",
    })
  } catch (error) {
    console.log(error)
  }
}
const deleteUser = async (req, res) => {
  const { nip } = req.body
  const response = await users.findOne({ where: { nip: nip } })
  if (!response) return res.status(404).json({ error: "No data found ...!" })
  try {
    users.destroy({ where: { nip: nip } })
    res.status(200).json({
      msg: "Users deleted has been success",
    })
  } catch (error) {
    console.log(error)
  }
}

const userLogin = async (req, res) => {
  const { nip, password } = req.body

  try {
    const check = await passwordCheck(nip, password)
    if (check.compare !== true)
      return res.status(400).json({ msg: "Wrong password...!" })
    res.status(200).json({
      users: check.userData,
      msg: "Login Succesfully",
    })
  } catch (error) {
    res.status(400).json({
      error: "Somethings wrong...!",
    })
  }
}

module.exports = { getUsers, createUser, updateUser, deleteUser, userLogin }
