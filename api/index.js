

const express = require ('express')
const app = express()
// const cors = require ('cors')
const PORT = 8080
// const mongoose = require ('mongoose')

// const { connectToDatabase, closeDatabaseConnection, client, insertUser } = require('../mongoDBConfig/mongodb');



app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})

const userRoute = require('../pages/user.js')
const leaderBoardRoute = require('../pages/leaderBoard.js')
const bodyParser = require('body-parser')


// app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoute)
app.use('/leaderBoard', leaderBoardRoute)

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

app.get('/leaderboard', (req, res) => {
    res.send('Leaderboard route');
  });

app.get('/users', (req, res) => {
    res.send('Users route');
  });


// router.post("/", async (req, res) => {
// app.post("/api/users", async (req, res) => {
//   try {
//       await connectToDatabase()
//       const anonymousUser = req.body;
//       console.log("Received user data", anonymousUser);

//       // Insert the user into the database using the function from db.js
//       const insertedId = await insertUser(anonymousUser);

//       res.json({ message: "User inserted successfully", insertedId });
//   } catch (error) {
//       console.error("Error inserting user:", error);
//       res.status(500).json({ error: "Internal server error" });
//   } finally {
//       await closeDatabaseConnection();
//   }
// });

  // router.get("/leaderBoard", async (req, res) => {
// app.get("/api/leaderboard", async (req, res) => {
//   try {
//       // Connect to the database
//       await connectToDatabase(client);
//       const db = client.db("Maze-Runner");
//       const coll = db.collection("users");

//       // Get user data by finding all users
//       const cursor = await coll.find();
//       const userData = await cursor.toArray();

//       res.json(userData);
//   } catch (error) {
//       console.error("Error retrieving user data:", error);
//       res.status(500).json({ error: "Internal server error" });
//   } finally {
//       // Close the database connection
//       await closeDatabaseConnection();
//   }
// });  



module.exports = app
