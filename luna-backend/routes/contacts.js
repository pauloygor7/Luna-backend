const express = require("express");
const router = express.Router();
const {
  createContact,
  getContact,
  markFav,
  deleteContact,
} = require("../controllers/contactsControllers");
const auth = require("../middlewares/auth");

router.post("/", auth, createContact);
router.get("/", auth, getContact);
router.patch("/:id/favorite", auth, markFav);
router.delete("/:id", auth, deleteContact);

module.exports = router;
