

const express = require ('express')
const app = express()
// const cors = require ('cors')
const PORT = 8080
// const mongoose = require ('mongoose')

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})

const userRoute = require('../pages/user')
const leaderBoardRoute = require('../pages/leaderBoard')
const bodyParser = require('body-parser')


// app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoute)
app.use('/leaderBoard', leaderBoardRoute)

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

app.get('/users', (req, res) => {
    res.send('Users route');
  });
  
app.get('/leaderBoard', (req, res) => {
    res.send('Leaderboard route');
  });

module.exports = app
