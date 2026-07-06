const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try {
        const fullToken = req.headers.authorization
        const token = fullToken?.split(' ')[1]
        console.log('FullToken:  ', fullToken)
        console.log('Token:  ', token)
        if (!token) {
            return res.status(403).json({
                message : "Access Dined"
            })
        }
    const decodedToken = jwt.verify(token, 'secret');

console.log(decodedToken);

req.user = decodedToken;

next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
}