const express = require ('express')
const cors = require ('cors')
// const { userMethod } = require('./routes/user')
const user = require('./routes/user')
// const mongoose = require ('mongoose')
const app = express()
const PORT = 8080



app.use(cors())
app.use(express.json())

app.use('/', user)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})

