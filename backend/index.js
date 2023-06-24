const express = require("express")
const cors = require("cors")
const port = 3090

const sequelize = require("./config/Database")
sequelize.sync().then(() => console.log("Database ready..."))

const userEndpoint = require("./routes/UserRoute")
const absenEndpoint = require("./routes/AbsenRoute")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/users", userEndpoint)
app.use("/absensi", absenEndpoint)

app.listen(port, () => console.log(`server running on port ${port}`))
