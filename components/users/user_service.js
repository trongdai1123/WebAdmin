
const userModel = require('./user_model');
const bcrypt = require('bcryptjs');

exports.login = async (username, password)=>{
try{
let user = await userModel.find({ username});
    if(user.length > 0){
        return user[0];
    }
    return null;
    }catch(error){
        throw new Error('co loi roi');
}

}


exports.signin = async (username) =>{
   try{
    let user = await userModel.find({ username});
    if(user.length > 0){
        return user[0];
    }
    return null;
   }catch(error){
    throw new Error('co loi roi');
   }
}

exports.signup = async(username, password) =>{
    const p = new userModel({username, password});
   return await p.save();  
}

exports.checkUsername = async(username)=>{
    try{
        let user = await userModel.find({username});
        if(user.length>0){
            return true;
        }
        return false;
    }catch(error){
            throw new Error('co loi roi');
    }
}

exports.getInfo = async (id) =>{
    const user = await userModel.findById(id);
    return user;
}

var users = [
    {_id: 1, username:'admin', password:'admin'},
    {_id: 2, username:'user', password:'user'},
]