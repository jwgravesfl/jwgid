const express = require('express')
const graphlHTTP = require('express-graphql')
const cors = require('cors')
const mongoose = require('mongoose')
const schema = require('./schema')

const app = express()
const PORT = 8080
mongoose.Promise = global.Promise
mongoose.connect('mongodb://jadmin:ggtr554T@localhost:27017/admin')
app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to GraphQL'
    })
})
app.use(cors())
app.use('/graphql', graphlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
}) 