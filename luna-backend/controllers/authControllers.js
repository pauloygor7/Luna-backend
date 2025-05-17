const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (request, response) => {
  const { name, email, password } = request.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  response.json({ token, user: { id: user.id, name, email } });
};

exports.login = async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return response.status(401).json({
      error: "Credencias incorretas",
    });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  response.json({ token });
};

exports.me = async (request, response) => {
  const user = await User.findById(request.userId).select("-password");
  response.json(user);
};
