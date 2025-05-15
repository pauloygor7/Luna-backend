const Contact = require("../models/Contact");

exports.createContact = async (request, reply) => {
  const contact = await Contact.create({
    ...request.body,
    user: request.userId,
  });
  reply.json(contact);
};

exports.getContact = async (request, reply) => {
  const contact = await Contact.find({ user: request.userId });
  reply.json(contact);
};

exports.markFav = async (request, reply) => {
  const contact = await Contact.findById(request.params.Id);
  contact.fav = !contact.fav;
  await contact.save();
  reply.json({ message: "Contato marcado como favorito!" });
};

exports.uncheckFav = async (request, reply) => {
  const contact = await Contact.findById(request.params.Id);
  contact.fav = false;
  await contact.save();
  reply.json({ message: "Contato desmarcado como favorito!" });
};

exports.deleteContact = async (request, reply) => {
  await Contact.deleteOne({ _id: request.params.Id, user: request.userId });
  reply.json({ message: "Contato deletado com sucesso!" });
};
