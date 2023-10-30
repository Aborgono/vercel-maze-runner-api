// {
//     "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
//   } 


// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "index.js",
//       "use": "@now/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "index.js"
//     }
//   ]
// }

const express = require ('express')
const app = express()
// const cors = require ('cors')
const PORT = 8080
// const mongoose = require ('mongoose')

const userRoute = require('./routes/user')
const leaderBoardRoute = require('./routes/leaderBoard')
const bodyParser = require('body-parser')


// app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoute)
app.use('/leaderBoard', leaderBoardRoute)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

module.exports = app
