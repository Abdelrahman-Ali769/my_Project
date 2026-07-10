const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
    try {
        const fullToken = req.headers.authorization
        const Token = fullToken?.split(' ')[1]
        console.log("FullToken is :", fullToken)
        console.log("Token is :", Token)
        if (!Token) res.json({ message: "Access Dnied" })
        const decodedToken = jwt.verify(Token, "Secret")
        req.User = decodedToken
        next()
    } catch (error) {
        console.log(error)
        res.status(403).send({
            message: "Invalid Token"
        })
    }
}