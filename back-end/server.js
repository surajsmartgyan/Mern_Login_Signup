const express = require('express');
const app=express();
const cors = require("cors")
const port = 9000;
const ConnnectDb = require('./db/dbConnection')
const Users = require('./db/user')


// middleware for parsing json 

app.use(express.json())

// Enable CORS 

app.use(cors())

// Signup 

app.post('/signup',async(req,res)=>{
    try{
        const {username,password} = req.body;
        console.log(req.body);
        const userdetails = new Users({username,password});
        await userdetails.save();
        res.status(201).json({message:'signup successfull'})
    }
    catch{
        res.status(500).json({error:'Signup Failed'})
    }
})

// login 

app.post('/login',async (req,res)=>{
    
    try{
        const {username,password} =req.body;
        const user = await Users.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid Username Or Password'})
        }
        if(user.password !== password ){
            return res.status(401).json({error:'Invalid Username Or Password '})
        }
        res.status(200).json({message:'Login Successfull '})
    }
    catch(error){
        res.status(500).json({Error:'Login Failed'})
    }
})

ConnnectDb();
app.listen(port,()=>{
    console.log("server Running Successfull port:",port);
});