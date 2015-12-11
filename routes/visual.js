var router = require('express').Router();
var path = require("path");

var DATA_FILE = "example.xml";

router.get("/", function(req, res) {
    res.sendStatus(200);
});

router.get("/:file", function(req, res) {
    res.render("cytoscape", {file: req.params.file});
});

module.exports = router;