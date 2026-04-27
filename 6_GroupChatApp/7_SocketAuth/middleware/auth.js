const jwt = require("jsonwebtoken");
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
         console.log("HEADER:", authHeader);
        if(!authHeader) {
            return res.status(401).json({message: "Unauthorized!"})
        }
        
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    }  catch (error) {
        console.log("JWT ERROR:", error.message);
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = authMiddleware;