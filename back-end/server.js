const express = require('express');
const app=express();
const port = 8000;
const ConnnectDb = require('./db/dbConnection')
const Users = require('./db/user')

// middleware for parsing json 

app.use(express.json())

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

ConnnectDb();
app.listen(port,()=>{
    console.log("server Running Successfull port:",port);
});