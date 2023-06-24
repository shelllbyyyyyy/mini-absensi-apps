const express = require("express")
const router = express.Router()
const { getData, inData, outData } = require("../controller/AbsenController")

router.get("/", getData)
router.post("/in", inData)
router.post("/out", outData)

module.exports = router
