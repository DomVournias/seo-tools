const express = require("express");
const PageSEO_ctrl = require("../controllers/PageSEO_ctrl.js");

const router = express.Router();

router.get("/pageseo/:url", PageSEO_ctrl.seoinfo);

module.exports = router;
