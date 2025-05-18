const express = require("express");
const router = express.Router();
const {
  createContact,
  getContact,
  markFav,
  uncheckFav,
  deleteContact,
} = require("../controllers/contactsControllers");
const auth = require("../middlewares/auth");

router.post("/", auth, createContact);
router.get("/", auth, getContact);
router.put("/:id/favorite", auth, markFav);
router.put("/:id/favorite", auth, uncheckFav);
router.delete("/:id", auth, deleteContact);

module.exports = router;
