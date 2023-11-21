const mongoose = require('mongoose');

const ConnnectDb = async ()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/mern_login_signup')
        console.log('Data Base Connected Successfully on mongoDb Server.')
    }
    catch(error){
        console.log("Data Base Connection Error",error)
    }
}
module.exports= ConnnectDb;