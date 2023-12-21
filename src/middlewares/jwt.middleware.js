import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) =>{

    const token = req.headers['authorization'];

    if(!token)
    return res.status(401).send('Unauthorized');

    try{
        const payload = jwt.verify(token, 'WkU1AS8Kx3QX57pPgiVQzQ2YH0L0dog8');
        req.userID = payload.userID;
        console.log(payload);
    }
    catch(err){
        return res.status(401).send('Unauthorized');
    }
    next();
}
export default jwtAuth;