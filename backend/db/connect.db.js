import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const DB_URL = process.env.MONGO_URI;

const connectToDB = async () => {
    try {
        const databaseInstance = await mongoose.connect(DB_URL); 

        console.log(`Database connected: ${databaseInstance.connection.host}`); 
    } catch (error) {
        console.error(`Error in connecting to database: ${error.message}`);
        process.exit(1); // Exit process on failure
    }
};

export default connectToDB;
