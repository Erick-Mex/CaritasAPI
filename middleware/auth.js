import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';


dotenv.config();
const secret = process.env.SECRET;

export default function TokenValidation(req, res, next) {
    const token = req.headers.auth_key

    if(!token){
        res.statusMessage = "You need to send the authToken"
        return res.status(401).end();
    }

    if(token)
    {
        jwt.verify(token, secret, (err) => {
            if(err) {
                res.statusMessage = "Incorrect Token";
                return res.status(420).end();
                next();
            } else {
                next();
            }
        })
    } else {
        res.statusMessage = "No authentication";
        return res.status(401).end();
        next();
    }
}