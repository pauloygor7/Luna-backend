const { request } = require("express");
const Alert = require("../models/Alert");

exports.sendAlert = async (request, reply) => {
  const alert = await Alert.create({
    user: request.userId,
    location: request.body.location,
    contact: request.body.contactId,
  });
  reply.json(alert);
};

exports.getHistory = async (request, reply) => {
  const history = await Alert.find({ user: request.userId });
  reply.json(history);
};
