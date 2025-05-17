const Contact = require("../models/Contact");

exports.createContact = async (request, response) => {
  const contact = await Contact.create({
    ...request.body,
    user: request.userId,
  });
  response.json(contact);
};

exports.getContact = async (request, response) => {
  const contact = await Contact.find({ user: request.userId });
  response.json(contact);
};

exports.markFav = async (request, response) => {
  const contact = await Contact.findById(request.params.Id);
  contact.fav = !contact.fav;
  await contact.save();
  response.json({ message: "Contato marcado como favorito!" });
};

exports.uncheckFav = async (request, response) => {
  const contact = await Contact.findById(request.params.Id);
  contact.fav = false;
  await contact.save();
  response.json({ message: "Contato desmarcado como favorito!" });
};

exports.deleteContact = async (request, response) => {
  await Contact.deleteOne({ _id: request.params.Id, user: request.userId });
  response.json({ message: "Contato deletado com sucesso!" });
};
