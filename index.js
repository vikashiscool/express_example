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
  res.send("Your color is: " + favorite);
})

//another example of URL params
app.get("/pick-a-number/:num", function (req, res){
  var number = req.params.num;
  res.send("You picked: " + num);
});

app.get("/multiply", function (req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  res.send( total.toString());
});


app.get("/contact", function (req, res){
  var contact_path = path.join(views, "contact.html");
  res.sendFile( contact_path );
});


app.get("/home", function (req, res){
  var contact_path = path.join(views, "home.html");
  res.sendFile( contact_path );
});

app.post("/tacos", function (req, res){
  console.log("yuhhh posted to meee");
  var burger = req.body.taco;
  burger.push( taco.name );
  res.send(tacos.join("</br>"));
})


var taco = [
  "crunch taco",
  "taco taco",
  "TACOSSSS"
];

app.get("/taco/:id", function(req, res){
  choice = req.params.id;
  var noms = taco[choice];
  res.send(noms);
});


app.get("/vikash", function(req, res){
  res.send ({hello: "wooooorld"}); //JSON string
});

app.listen(3000, function(){
  console.log("Go to localhost:3000/");
});
