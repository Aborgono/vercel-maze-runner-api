const express = require('express');
const router = express.Router();
const { connectToDatabase, closeDatabaseConnection, client } = require('../mongoDBConfig/mongodb');

router.get("/", async (req, res) => {
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

module.exports = router;
