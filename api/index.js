

const express = require ('express')
const app = express()
// const cors = require ('cors')
const PORT = 8080
// const mongoose = require ('mongoose')

const { connectToDatabase, closeDatabaseConnection, client } = require('../mongoDBConfig/mongodb');


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})

const userRoute = require('../pages/user')
// const leaderBoardRoute = require('../pages/leaderBoard')
const bodyParser = require('body-parser')


// app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoute)
// app.use('/leaderBoard', leaderBoardRoute)

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

app.get('/users', (req, res) => {
    res.send('Users route');
  });

  // router.get("/leaderBoard", async (req, res) => {
  app.get("/leaderBoard", async (req, res) => {
    try {
        // Connect to the database
        await connectToDatabase(client);
        const db = client.db("Maze-Runner");
        const coll = db.collection("users");

        // Get user data by finding all users
        const cursor = await coll.find();
        const userData = await cursor.toArray();

        res.json(userData);
    } catch (error) {
        console.error("Error retrieving user data:", error);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        // Close the database connection
        await closeDatabaseConnection();
    }
});  

// app.get('/leaderBoard', (req, res) => {
//     res.send('Leaderboard route');
//   });

module.exports = app
