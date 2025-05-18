const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { sendAlert, getHistory } = require("../controllers/alertControllers");

router.post("/", auth, sendAlert);
router.get("/history", auth, getHistory);

module.exports = router;
