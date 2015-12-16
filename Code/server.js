var fs = require('fs');
var express = require("express");
var http = require('http');
var url = require('url');
var app;

var port = 3000;
app = express();
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(port);

var todos = [];
	var t1 = {
		message: "homework",
		deadline: "12/12/2015"
		};
	var t2 = {
		message: "exam",
		deadline: "15/12/2015"
		};
todos.push(t1);
todos.push(t2);

app.get("/todos", function(req,res){
	res.json(todos);
	console.log("get voor todos");
});

app.get("/addtodo", function(req,res){
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
if(query["message"]!==undefined){
	var tx = {
		message: query["message"],
		deadline: query["deadline"]
		};
	todos.push(tx);
	res.end("Todo added");
	console.log("added" + tx.message);
	}
else
{
	res.end("missing message parameter");
}
});

app.get("/Update", function(req,res){
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
var	todoid = query["Todo"];
var	message = query["message"];
var deadline = query["deadline"];

if(todoid!==undefined){
	if (message!==undefined){
		todos[todoid].message = message;
		res.end("message of todo: " + todoid + " updated");
	}
	if (deadline!==undefined){
		todos[todoid].deadline = deadline;
		res.end("deadline of todo: " + todoid + " updated");
	}
	res.end("Todo updated for deadline or message if given");
}
else{
	res.end("no Todo (integer) given ");
}
});

app.get("/Delete", function(req,res){
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
var	todoid = query["Todo"];
console.log(todos[0]);
if(todoid!==undefined){
	todos.splice(todoid,1);
	res.end("Todo: " + todoid + " removed")
}
else{res.end("No Todo Given")}

});
