require('dotenv').config();
const express=require('express'); 
const connectToDatabase=require('./database/database');
const bookRoutes=require('./routes/book-route');
const userRoutes=require('./routes/auth-route');
const borrowRoutes=require('./routes/borrow-routes');
const app=express(); 
const PORT=process.env.PORT||3000; 

const startServer = async () => {
  await connectToDatabase();

  app.use(express.json());

  app.use("/books", bookRoutes);
  app.use("/auth", userRoutes);
  app.use("/borrow", borrowRoutes);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

