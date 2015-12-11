var router = require('express').Router();
var xmltojson = require("../controllers/xmltojson");

var DATA_FILE = "example.xml";

router.get("/", function(req, res) {
    xmltojson(DATA_FILE, function(result) {
        res.send(result)
    });
});

module.exports = router;