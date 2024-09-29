import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URI; // This matches the updated variable name in the .env file
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectDB() {
    if (!db) {
        try {
            await client.connect();
            db = client.db(process.env.DB_NAME); // Make sure DB_NAME is also set in your .env file if you're using it
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
            throw error;
        }
    }
    return db;
}

export default connectDB;


