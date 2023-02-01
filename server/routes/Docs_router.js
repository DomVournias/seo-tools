const express = require("express");
const Docs_ctrl = require("../controllers/Docs_ctrl.js");

const router = express.Router();

router.get("/docs", Docs_ctrl.docs);

module.exports = router;
