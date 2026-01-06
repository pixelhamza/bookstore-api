const mongoose=require('mongoose'); 


const connectToDatabase=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");

    }
    catch(e){
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}

module.exports=connectToDatabase;