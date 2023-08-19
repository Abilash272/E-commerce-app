const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header('x-auth-token'); // Retrieve token from request headers
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decodedToken = jwt.verify(token, 'd3w0-E_c0ww3rce-meB'); // Verify token
    req.user = decodedToken.userId; // Store user ID from token in the request
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
