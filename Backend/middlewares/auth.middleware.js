const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    try {
        // Get the token from cookies or Authorization header
        const token = req.cookies.token || 
                      (req.headers.authorization && req.headers.authorization.startsWith('Bearer') 
                       ? req.headers.authorization.split(' ')[1] 
                       : null);

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: Token not found" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user in the database
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        // Attach user to the request object
        req.user = user;
        return next();
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
