const mongoose = require("mongoose");
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
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).json({ message: "ID inválido." });
  }
  const contact = await Contact.findById(id);
  if (!contact) {
    return response.status(404).json({ message: "Contato não encontrado." });
  }
  contact.fav = !contact.fav;
  await contact.save();
  response.json({
    message: contact.fav
      ? "Contato marcado como favorito!"
      : "Contato removido dos favoritos!",
  });
};

exports.deleteContact = async (request, response) => {
  await Contact.deleteOne({ _id: request.params.id, user: request.userId });
  response.json({ message: "Contato deletado com sucesso!" });
};
