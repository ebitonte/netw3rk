var parser = require("xml2js").Parser();
var fs = require("fs");
var path = require("path");

function xmltojson(fileName, callback) {
    fs.readFile(path.join(__dirname, "../public/data", fileName), function(err, data) {
        if (err) {
            return;
        }
        parser.parseString(data, function(err, result) {
            if (err) {
                return;
            }
            return callback(result);
        });
    });
}

module.exports = xmltojson;