var restify = require('restify');

/*
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}*/

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

function back(req,res,next) {
    res.send('from' + req.params.school);
    next();
}

var server = restify.createServer();
//var const = restify.createServer();

//server.get('/hello/:name', respond);
//server.head('/hello/:name', respond);

server.get('/hello/:name',respond);
server.head('/hello/:name', respond);

server.get('/from/:school',back);
server.head('/from/:school',back);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});