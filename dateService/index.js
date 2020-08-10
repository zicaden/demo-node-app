const express = require("express");
const dateSvc = require("./service/dateService.js");
let app = new express();

app.get("/", function(req, res){
    let dt_val = dateSvc.getDateValue();
    res.send("This is Date Service. The date value is: " + dt_val);
});

app.get("*", function(req, res){

    res.send("You seem to be enjoying wandering around!!");
});

app.all("*", function(req, res) {
    res.send("Whoa! You seem to need some help!!");
});

let port = 3030;
app.listen(port, function(){

    console.log("Server is listening on localhost: " + port);
});