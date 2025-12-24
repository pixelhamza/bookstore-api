const express=require('express'); 
const router=express.Router(); 
const {borrowBook,returnBook,getMyBorrows}=require('../controllers/borrow-controller');
const auth=require('../middleware/auth');


router.get("/me",auth,getMyBorrows);
router.post("/:bookId",auth,borrowBook);
router.put("/return/:borrowId",auth,returnBook);


module.exports=router;