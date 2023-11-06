const express = require('express');
const router = express.Router();
const { connectToDatabase, closeDatabaseConnection, client } = require('../mongoDBConfig/mongodb');

router.get("/", async (req, res) => {
    console.log("1")
    try {
        // Connect to the database
        console.log("2")
        await connectToDatabase(client);
        console.log("3")
        const db = client.db("Maze-Runner");
        console.log("4")
        const coll = db.collection("users");
        console.log("5")

        // Get user data by finding all users
        const cursor = await coll.find();
        console.log("6")
        const userData = await cursor.toArray();
        console.log("7")

        res.json(userData);
        console.log("8")
    } catch (error) {
        console.error("Error retrieving user data:", error);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        // Close the database connection
        console.log("9")
        await closeDatabaseConnection();
    }
});

module.exports = router;
