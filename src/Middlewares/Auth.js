const adminAuth = (req, res, next) => {
    console.log("Admin Auth checking");

    const token = "xyz";
    const isAuthorized = token === "xyz";

    if (!isAuthorized) {
        return res.status(401).send("Unauthorized Admin");
    }

    next();
};

module.exports = {
    adminAuth,
};