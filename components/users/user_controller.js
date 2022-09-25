const userService = require('./user_service');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (username, password) =>{
    try{
    return await userService.login(username, password);
}catch(error){
throw new Error('co loi roi');
}
}

exports.signup = async(username, password) =>{
    try{
        const check = await userService.checkUsername(username);
        if (check){
            throw new Error('tai khoan da ton tai');
            return;
        }
        // ma hoa password
        const hashPassword = await bcryptjs.hashSync(password,10);
       return await userService.signup(username,hashPassword);
    }catch(error){
        throw new Error(error.message||'co loi roi');
    }
}

exports.signin = async (username, password)=>{
    try{    
        const user = await userService.signin(username);
        if (user) {
            const check = await bcryptjs.compareSync(password, user.password);
            if (check) {
                const token = jwt.sign({username: user.username, _id: user._id },
                        'secret',{ expiresIn: 30 * 24 * 60 * 60 });
                            // refresh token 90 days
                return token;
            } else {
                throw new Error('dang nhap khong thanh cong');
            }
        } else {
            throw new Error('dang nhap khong thanh cong');
        }
    }catch(error){
        throw new Error(error.message || 'co loi roi');
    }
}

exports.getInfo = async (id) =>{
   try{
    return await userService.getInfo(id);
   }catch (error){
    console.log(error)
    throw new Error(error.message || 'co loi roi');
   }
}