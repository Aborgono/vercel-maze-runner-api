const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let coll; // Collection reference

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("Maze-Runner");
        coll = db.collection("users");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}

async function insertUser(user) {
    try {
        const result = await coll.insertOne(user);
        return result.insertedId;
    } catch (error) {
        console.error("Error inserting user:", error);
        throw error;
    }
}

async function closeDatabaseConnection() {
    await client.close();
    console.log("MongoDB connection closed");
}

module.exports = { connectToDatabase, insertUser, closeDatabaseConnection, client };
