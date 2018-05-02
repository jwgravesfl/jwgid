import express from 'express'
import graphlHTTP from 'express-graphql'
const cors = require('cors')
import mongoose from 'mongoose'
import schema from './schema'

const app = express()
const PORT = 9000
mongoose.Promise = global.Promise
mongoose.connect('mongodb://jadmin:ggtr554T@ds263989.mlab.com:63989/heroku_kgrvdt9g')
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
app.listen(process.env.PORT || {PORT}, function() {
    console.log('Express server is up and running on PORT ${PORT}!');
  });