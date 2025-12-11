const mongoose=require('mongoose'); 


const connectToDatabase=()=>{
    try{
        mongoose.connect(`mongodb+srv://nashithwk25_db_user:nashithwk2005@cluster0.pifux64.mongodb.net/`);
        console.log("Database connected successfully");

    }
    catch(e){
        console.log("Error->",e);
    }
}

module.exports=connectToDatabase;