import mongoose from "mongoose";
import { envConfig } from "./dotenv.js";

  
const db = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB successfully");
        
    } catch (error) {
        console.log("mongoose not connected ");
        console.log(error.message);
    }
};
export default db;