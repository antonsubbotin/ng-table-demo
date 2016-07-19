var express = require("express");
var app = express();

var data = [
	{name: 'Ivan', age: '20'}, 
	{name: 'Peter', age: '23'}, 
	{name: 'Sidor', age: '17'}, 
];

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('<h1>Hello world!</h1>');
});

app.get('/data', function(req, res) {
	res.json(data);
});

app.listen('3000', function() {
	console.log('Server is listening on port 3000');
});