require('dotenv').config();
const express=require('express'); 
const connectToDatabase=require('./database/database');
const app=express(); 
const PORT=process.env.PORT; 

//connect to our database
connectToDatabase();

//middleware
app.use(express.json());

app.listen(PORT,()=>{
    console.log("Server is now running");
})

