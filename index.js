'use strict';

const {WebhookClient} = require('dialogflow-fulfillment');
var restify = require('restify');
const bodyParser = require('body-parser');

var server = restify.createServer();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

const WELCOME_INTENT = "Default Welcome Intent"
const FALLBACK_INTENT = "Default Fallback Intent"
const ABOUT_SPACE = "About Space"
const FACT_ENTITY = "TypeOfHeavenlyBody"

function WebHookQuery(req, res) {
    const agent = new WebhookClient({request: req, response: res});
    console.info(`agent set`);
    
    const action = agent.action;

    switch (action){
        case WELCOME_INTENT:
            agent.add('Welcome to Mr.Space facts generator! Ask me something about the great cosmos');
            break;
        
        case FACT_ENTITY:
            agent.add('Our solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune')
            break;
    }

    agent.handleRequest(action);
}

server.post('/', function(req,res){
    console.info(`\n\n>>>>>>> S E R V E R   H I T <<<<<<<`);
    WebHookQuery(req,res);
})

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
/*
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

function back(req,res,next) {
    res.send('from' + req.params.school);
    next();
}*/

/*
//var const = restify.createServer();

//server.get('/hello/:name', respond);
//server.head('/hello/:name', respond);

server.get('/hello/:name',respond);
server.head('/hello/:name', respond);

server.get('/from/:school',back);
server.head('/from/:school',back);


*/