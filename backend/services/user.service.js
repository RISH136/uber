const userModel=require('../models/user.model')

module.exports.createUser=async({firstname,lastname,email,password})=>{
    if(!firstname || !lastname || !email){
        throw new Error('All field are required');
    }
    const user=await userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password
    })

    return user;
}

