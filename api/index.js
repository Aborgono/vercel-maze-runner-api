// const express = require('express');
// const { v4 } = require('uuid');

// // Create an instance of Express.js
// const app = express();

// // Set Cache-Control headers for all responses from this Express app
// app.use((req, res, next) => {
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   next();
// });

// // Define the API routes
// app.get('/api', (req, res) => {
//   const path = `/api/item/${v4()}`;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
// });


// module.exports = app;

const express = require ('express')
const app = express()
const cors = require ('cors')
const PORT = 8080
// const mongoose = require ('mongoose')

const userRoute = require('./routes/user')
const leaderBoardRoute = require('./routes/leaderBoard')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoute)
app.use('/leaderBoard', leaderBoardRoute)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})
