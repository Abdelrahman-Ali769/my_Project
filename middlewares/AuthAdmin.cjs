module.exports = (req, res, next) => {
    if (!req.User || req.User.role !== "Admin") {
        return res.status(403).json({
            message: "You don't have permission to perform this action."
        });
    }

    next();
};