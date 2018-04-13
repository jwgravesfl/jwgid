const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const port = 9000

const app = express()
app.use(cors(), bodyParser.json())
app.listen(port, () => console.log(`Server running on port ${port}`))
