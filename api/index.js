

const express = require ('express')
const app = express()
const cors = require ('cors')
const PORT = 8080




app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})

const userRoute = require('./user.js')
const leaderBoardRoute = require('./leaderBoard.js')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
app.use('/api/users', userRoute)
app.use('/api/leaderboard', leaderBoardRoute)



app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })


module.exports = app
