const express = require('express')
const cors = require('cors')

const app = express()
const { errors } = require('celebrate')

app.use(cors())
app.use(express.json())
// routes
app.use(errors())

app.listen(3000)