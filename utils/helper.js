const jwt = require('jsonwebtoken');
const secret = 'shiva'

const transformError =(obj) =>{
    let errors = [];
    if(typeof(obj)==='object'){
        for(key in obj.errors){
            let message = obj.errors[key]['message'];
            errors.push(message);
        }
        return(errors)
    }else{
        return obj;
    }
}

const authenticated = (req, res,next) => new Promise((resolve, reject) => {
    if(req.headers.authorization) {
        let token = req.headers.authorization;
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                res.send({"status": "failed", "message": "Invalid error"});

            } else {
                req.user_id = decoded.id;
                //resolve(req.user_id);
                next();
            }
        })
    } else {
        res.send({"status": "failed", "message": "Not Authorized"});
    }
}) 

module.exports = {
    transformError, authenticated
}