const { validateToken } = require("../services/auth");

function checkForAuthenticationToken() {
    return (req, res, next) => {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
            return next();
        }

        try {
            const userPayload = validateToken(token);
            req.user = userPayload;
        } catch (error) {
            console.error('Token validation error:', error);
        }

        return next();
    };
}

module.exports = {
    checkForAuthenticationToken,
};

