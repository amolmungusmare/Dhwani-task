const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.genrateAcceessToken = (userData) => {
  return jwt.sign(userData, process.env.SECRET_TOKEN, { expiresIn: "24h" });
};

exports.authenticationToken = (req, res, next) => {
  if (req.headers.cookie === undefined) {
    return res.status(403).json({ message: "Token not found" });
  }
  const token = req.headers.cookie.split("=")[1];
  jwt.verify(token, process.env.SECRET_TOKEN, (err, data) => {
    if (err) {
      return res.status(401).json({ message: err.message });
    }
    req.data = data;
    next();
  });
};
