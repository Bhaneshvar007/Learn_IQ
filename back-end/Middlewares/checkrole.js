let express = require('express');
 let jwt = require('jsonwebtoken')


function checkRoleFn(role) {
    return (req, res, next) => {
        let token = req.headers.authorization;

        if (!token) {
            return res.send('Unauthorizeddd User ||');
        }
        else {
            let deCodedToken = jwt.verify(token, process.env.TOKEN);

            if (!role.includes(deCodedToken.role)) {
                return res.send('Access denieddd ||')
            }
            else {
                next();
            }
        }
    }
}



module.exports = checkRoleFn