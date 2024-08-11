const mongoose =requiree("mongoose")
const dotenv = require("dotenv")    

dotenv.config()

const connectDB=async()=>{
    try{
        await mongoose.coonect(process.env.MONGO_URI)
        console.log("database connected")
    }
    catch(err){
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
