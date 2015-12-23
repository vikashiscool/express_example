var express = require('express'),
    app     = express()
    path    = require("path")
    views   = path.join(process.cwd(), "views");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
//req and res are objects
//...so you can do res.send(req.headers);
  // res.send({hello: "wooooorld"});
});

//example of URL params
app.get("/color/:choice", function (req, res){
  var favorite = req.params.choice;
  if (!favorite){
  res.send("You have no favorite color :(");
  } else {
  res.send("Your color is: " + favorite);
  }
})

//another example of URL params
app.get("/pick-a-number/:num", function (req, res){
  var number = req.params.num;
  res.send("You picked: " + number);
});

//example of query params (e.g. /multiply?x=4&y=3)
app.get("/multiply", function (req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  res.send( x + " * " + y + " = " + total.toString() + ".<br>Because math.");
});

//Uses path.join and res.sendFile to render static contact view
app.get("/contact", function (req, res){
  var contact_path = path.join(views, "contact.html");
  res.sendFile( contact_path );
});

//Uses path.join and res.sendFile to render static home view
app.get("/home", function (req, res){
  var home_path = path.join(views, "home.html");
  res.sendFile( home_path );
});

//Uses req.params.id for rendering data from taco JSON object.
app.post("/tacos", function (req, res){
  console.log("yuhhh posted to meee");
  var burger = req.body.taco;
  burger.push( taco.name );
  res.send(tacos.join("</br>"));
})

//JSON object
var taco = [
  "crunchy taco",
  "Taco Tuesday",
  "TACOSSSS!!!1"
];

//List single taco by ID using req.params.id
app.get("/taco/:id", function(req, res){
  choice = req.params.id;
  var noms = taco[choice];
  res.send(noms);
});

//Render a JSON object inline
app.get("/vikash", function(req, res){
  res.send ({hello: "wooooorld", what: "render a json object inline"}); //JSON string
});

app.listen(3000, function(){
  console.log("Go to localhost:3000/");
});
