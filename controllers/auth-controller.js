const User=require('../models/User');
const bcrypt=require('bcryptjs');

const register=async (req,res)=>{
    try{ 
        const{username,password,role}=req.body; 

        const checkexistingUser=await User.findOne({$or:[{username}]});
        if(checkexistingUser){
            return res.status(400).json({
                success:false, 
                message:"User already exists"
            })
        }
        //salt the pass
       const hashed = await bcrypt.hash(password, 10);


        const newUser=new User({
            username,
            password:hashed,
            role:role||'user'

        });
        await newUser.save();
        if(newUser){
            res.json({
                success:true, 
                message:"User created Successfully"
            });
        }


    }catch(e){
        console.log(e);
        res.status(500).json({ 
            success:false,
            message:"Something went wrong"
        });

    }
}

const login=async(req,res)=>{ 
    try{ 
        const {username,password}=  req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
                 });
                }
     

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
                });}
        res.status(200).json({
            success:true,
            message:"Successfully logged in "
        })
       
       

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong"
            });
        }
};

