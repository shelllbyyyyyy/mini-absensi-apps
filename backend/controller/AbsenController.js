const absen = require("../models/AbsensiModel")

const getData = async (req, res) => {
  const response = await absen.findAll()
  res.status(200).json({
    absen: response,
    msg: "Absensi list",
  })
}

const inData = async (req, res) => {
  const { nip } = req.body
  const response = await absen.create({
    users_nip: nip,
    status: "in",
  })
  res.status(200).json({
    data: response,
    msg: "CheckIn success",
  })
}

const outData = async (req, res) => {
  const { nip } = req.body
  const response = await absen.create({
    users_nip: nip,
    status: "out",
  })
  res.status(200).json({
    data: response,
    msg: "CheckIn success",
  })
}

module.exports = { getData, inData, outData }
