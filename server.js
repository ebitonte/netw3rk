var express = require("express");
var app = express();

const PORT=8080; 

app.set('view engine', 'ejs');

// ROUTES FILES
var routes = require("./routes/route");
var convert = require("./routes/convert");

// ROUTER SETUP
app.use('/', routes);
app.use("/convert", convert);

app.use(express.static('public'));

var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://localhost:"+port)
});