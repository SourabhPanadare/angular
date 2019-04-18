var express = require('express');
var exphbs = require( 'express-handlebars');
var path = require('path');

var app = express();

app.engine("hbs", exphbs({
  defaultLayout: "default",
  extname: ".hbs",
  helpers: require("./public/js/helpers.js").helpers, // same file that gets used on our client
  partialsDir: "views/partials/", // same as default, I just like to be explicit
  layoutsDir: "views/layouts/" // same as default, I just like to be explicit
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.render("index")
});

app.listen(3000, function(){
  console.log('Server up: http://localhost:3000');
});
