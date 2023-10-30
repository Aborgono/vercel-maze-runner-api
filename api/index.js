
// {
//     "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
//   } 

const express = require ('express')
const app = express()
const cors = require ('cors')
const PORT = 8080
// const mongoose = require ('mongoose')

const userRoute = require('../routes/user')
const leaderBoardRoute = require('../routes/leaderBoard')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoute)
app.use('/leaderBoard', leaderBoardRoute)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})
