const express = require('express');
const redis = require('redis');
const seed = require('./config/seed.js');
const path = require('path');
const tiempo = require('./api/tiempo.js');
const bluebird = require('bluebird');

//Express declaration
const app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    next();
});

//promisifying node_redis
bluebird.promisifyAll(redis.RedisClient.prototype);

//Redis conection 
const client = redis.createClient();
seed.generate(client);

//Node Server
app.listen(3000,function(){
	console.log("listening on 3000");
})

//Express static config
app.use(express.static(path.join(__dirname, 'public')));

//Express routing
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname +'/public'+'/index.html'));
})

app.get('/temp/:location',function(req,res){
		let pos;
		do{
			pos = Math.random(0, 1);
			try{
				if (pos < 0.5){
					throw new Error('How unfortunate! The API Request Failed');
				}else{
					let coordinates = tiempo.getAll(client,req.params.location);
						coordinates.then((coordinates) => {
							let forecast = tiempo.getTiempo(coordinates.lat , coordinates.lon);
								forecast.then((forecast) => {
									res.send(JSON.stringify(forecast));
								}).catch((err) => {
									console.log("dark-sky promise rejected"+err);
								})
						}).catch( () => {
							console.log("coordinates promise rejected");
						})
				}
			}catch(err){
				tiempo.setError(client,err);
			}
		}while(pos < 0.5);
});


