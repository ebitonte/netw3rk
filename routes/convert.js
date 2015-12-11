var router = require('express').Router();
var xmltojson = require("../controllers/xmltojson");

var DATA_FILE = "example.xml";

router.get("/", function(req, res) {
    xmltojson(DATA_FILE, function(result) {
        res.send(result)
    });
});

router.get("/:file", function(req, res) {
    xmltojson(req.params.file, function(result, err) {
        if (err) {
            res.status(404).send(err);
        }
        res.send(result);
    });
});

module.exports = router;