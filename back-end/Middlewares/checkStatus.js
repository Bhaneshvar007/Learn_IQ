let express = require('express');
let jwt = require('jsonwebtoken')


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



module.exports = checkAdminStatus