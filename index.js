var express = require('express');
var app = express();
const https = require('https');
const request = require('request');
app.set('views', __dirname + '');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'))

app.get('/', function(req, res){
	res.render('index.html');
});

app.get('/article-1', function(req, res){
	request('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json', {json: true}, function(err, response, body){
		res.send(body);
	});
});

app.get('/article-2', function(req, res){
	request('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json', {json: true}, function(err, response, body){
		res.send(body);
	});
});
app.get('/article-3', function(req, res){
	request('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json', {json: true}, function(err, response, body){
		res.send(body);
	});
});
app.get('/article-4', function(req, res){
	request('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json', {json: true}, function(err, response, body){
		res.send(body);
	});
});
app.get('/article-5', function(req, res){
	request('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json', {json: true}, function(err, response, body){
		res.send(body);
	});
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`))