// Express
var express = require('express'); 
var app = express();
var server = app.listen(1337);

// Sockets
io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mongoose Validation
validate = require("mongoose-validator")

// Static Folder
app.use(express.static( __dirname + '/public' ));

// Mongoose 
require('./server/config/mongoose.js');

// Routes 
require('./server/config/routes.js')(app);

// Socket Routes 
require('./server/config/socketRoutes.js')(io);