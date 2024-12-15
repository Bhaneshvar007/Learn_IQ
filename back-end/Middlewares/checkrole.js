let express = require('express');
let jwt = require('jsonwebtoken');
const User = require('../Models/user.model');



// is token are not

async function isProtect(req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
        return res.send('Unauthorizeddd User ||');
    }
    else {
        let deCodedToken = jwt.verify(token, process.env.TOKEN);
        req.user = await User.findById(deCodedToken.id).select('-password');
        console.log(req.user);

        next();

    }
}


//  Check for courcess
function checkRoleFn(role) {
    return async (req, res, next) => {
        let token = req.headers.authorization;

        if (!token) {
            return res.send('Unauthorizeddd User ||');
        }
        else {
            let deCodedToken = jwt.verify(token, process.env.TOKEN);
            req.user = await User.findById(deCodedToken.id).select('-password');
            console.log(deCodedToken, "fecode");

            console.log(req.user, "poijhgvc");

            if (!role.includes(deCodedToken.role)) {
                return res.send('Access denieddd ||')
            }
            else {
                next();
            }
        }
    }
}


// Check for approval and reject
function checkAdminStatus(role) {
    return (req, res, next) => {
        let token = req.headers.authorization;

        if (!token) {
            return res.send('Unauthorizeddd User ||');
        }
        else {
            let deCodedToken = jwt.verify(token, process.env.TOKEN);


            if (deCodedToken.role != role) {
                return res.send('Access denieddd ||')
            }
            else {
                next();
            }
        }
    }
}




module.exports = { isProtect, checkRoleFn, checkAdminStatus }