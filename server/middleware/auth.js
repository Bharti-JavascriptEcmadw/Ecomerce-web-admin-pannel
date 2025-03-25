import JWT from 'jsonwebtoken';
import adminModel from '../models/adminModel.js';

const auth = async (req, res, next) => {
    const token= req.cookies.token; // Or wherever your token is stored

   console.log(`this is the token which i get ${token}`)

    if (!token) {
        console.log(!token)
        
        return res.status(401).json({ error: 'Token is missing or empty' });
    }

    try {
        const payload = JWT.verify(token, process.env.JWT_SECRET);
        console.log(payload)
        // req.user = { userID: payload.userID };user

        req.user=await adminModel.findById(payload.userID)
        console.log(`whole user console  ${req.user}`)
        
        console.log(payload.userID);
        
        const userID=payload.userID;
        console.log(userID)

        
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(401).json({ error: 'User is not authorized' });
        }
};
;
export default auth;