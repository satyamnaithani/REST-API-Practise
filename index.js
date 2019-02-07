var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.send("Satyam is great!");
	//res.json({message: "It is a json object!"});
});

app.use('/api/todos', todoRoutes);


app.listen(port, function () {
	console.log("App is running on port" + port);
}); 