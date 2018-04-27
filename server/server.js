import express from 'express'
import graphlHTTP from 'express-graphql'
const cors = require('cors')
import mongoose from 'mongoose'
import schema from './schema'

const app = express()
const PORT = 9000
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/gql_db')
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