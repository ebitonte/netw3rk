var parser = require("xml2js").Parser();
var fs = require("fs");
var path = require("path");
var _ = require("lodash");

function xmltojson(fileName, callback) {
    fs.readFile(path.join(__dirname, "../public/data", fileName), function(err, data) {
        if (err) {
            return;
        }
        parser.parseString(data, function(err, result) {
            if (err) {
                return;
            }
            result = limitTheJson(result);
            return callback(result);
        });
    });
}

function limitTheJson(largeJson) {
    var smallJson = largeJson;
    // TODO: Do stuff here to limit the number of things!
    return smallJson;
}

module.exports = xmltojson;