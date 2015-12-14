var parser = require("xml2js").Parser();
var fs = require("fs");
var path = require("path");
var _ = require("lodash");

var FILE_MAP = {
    "example": processExample
    // put the file name as the key, and the function that will process it 
    // as the entry
};

function xmltojson(fileName, callback) {
    fs.readFile(path.join(__dirname, "../public/data", fileName + ".xml"), function(err, data) {
        if (err) {
            return callback(data, err);
        }
        parser.parseString(data, function(err, result) {
            if (err) {
                return callback(result, err);
            }
            // This will call whichever processor you defined above, unless it doesn't exist
            // and then it will call the default which is the limitTheJson thing
            result = FILE_MAP[fileName](result) || limitTheJson(result);
            return callback(result);
        });
    });
}

function processExample(largeJson) {
    var smallJson = largeJson;

    return smallJson;
}

function limitTheJson(largeJson) {
    var smallJson = largeJson;
    // TODO: Do stuff here to limit the number of things!
    return smallJson;
}

module.exports = xmltojson;