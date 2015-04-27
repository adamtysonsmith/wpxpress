var express = require('express');
var mongoose = require('mongoose');
var fileSystem = require('fs');

// Require the Routes
var routes = require('./routes/index');

// Initialize Express, EJS Templating, and Static Files
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Connect to Database
mongoose.connect('*** Private for Github Purposes ***', function(error) {
    if(error){
        console.log(error);
    }
});

// Dynamically Load the Models
//fileSystem.readdirSync('./models').forEach(function (file) {
//    if (file.substr(-3) === '.js') {
//        require('./models/' + file);
//    }
//});

// Use the Routes
app.use('/', routes);

// Server Configuration
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});