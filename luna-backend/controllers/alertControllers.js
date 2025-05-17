const Alert = require("../models/Alert");

exports.sendAlert = async (request, response) => {
  const alert = await Alert.create({
    user: request.userId,
    location: request.body.location,
    contact: request.body.contactId,
  });
  response.json(alert);
};

exports.getHistory = async (request, response) => {
  const history = await Alert.find({ user: request.userId });
  response.json(history);
};
