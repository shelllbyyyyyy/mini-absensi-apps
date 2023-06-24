const express = require("express")
const router = express.Router()
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
} = require("../controller/UserController")

router.get("/", getUsers)
router.post("/", createUser)
router.post("/login", userLogin)
router.put("/", updateUser)
router.delete("/", deleteUser)

module.exports = router
