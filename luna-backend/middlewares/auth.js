const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.userId = decoded.id;
    next();
  } catch {
    response.sendStatus(403);
  }
};
