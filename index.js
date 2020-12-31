const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));
// app.use(express.static('/img'));
// app.use(express.static('static'));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/lib'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(port, () =>
    console.log(`Login app listening on ${port}!`));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/ecell", function (req, res) {
    res.sendFile(path.join(__dirname + "/single-page.html"));
});

app.get("/majorandMinor", function (req, res) {
    res.sendFile(path.join(__dirname + "/majorMinor.html"));
});

app.get("/onlinelearning", function (req, res) {
    res.sendFile(path.join(__dirname + "/onlineLearning.html"));
});



app.post("/search", async (req, res) => {
  console.log("User Add");
  console.log("req = " + req.body);
  //res.json(await user.adduser(req.body));
});

