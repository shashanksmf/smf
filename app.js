var express= require('express');
var app= express();
var Firebase = require('firebase');
var router = express.Router();
var mongo = require('mongodb');
var assert =  require('assert');
var http = require('http');

var url="mongodb://localhhost:27017/test";

var FirebaseRef = new Firebase("https://mynodetest-38588.firebaseio.com/");

Firebase.initializeApp({
 //   serviceAccount: "path/to/serviceAccountCredentials.json",
    databaseURL: FirebaseRef
});


var db = Firebase.database();
var ref = db.ref("/some_resource");
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});

app.use(express.static(__dirname));
app.listen(8081,function(){
    console.log("server created");

})

app.get('/',function(req,res){
    console.log("app get")
    res.render("index",{});
})

router.use('/', function (req,res,next){
    console.log("this is the response",res,"this is the request");
    res.render("index.html");
    next();
})

router.use('/index.html', function (req,res,next){
    console.log("this is the response",res,"this is the request");
    res.send("recievcdsad index");
next();
})