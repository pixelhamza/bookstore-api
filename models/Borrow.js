const mongoose=require('mongoose'); 
const BorrowSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true
    },
    borrowedAt:{
        type:Date, 
        default:Date.now
    },
    returnedAt:{
        type:Date, 
        default:Date.now
    },
    status:{
        enum:["borrowed","returned"]
    }
   

});

 module.exports=mongoose.model("Borrow",BorrowSchema);