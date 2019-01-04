var express = require('express');
var app = express();
 
app.get('/search', function (req, res) {  
console.log('request is ' +req.param('term'));
  const yelp = require('yelp-fusion');

const client = yelp.client('zOXN3Q6CI8yKqXlO2b-n-RBstHm7rq_X8llhkqryzYn1YsXlIlREmVIT-0Gs_eX2p_nD8itRXgymXLnKTxIjnMZO4lhAxlvpcRxO8pwQpPCtDAHMTaAJbMvs8rkuXHYx');
 
client.search({
  term:req.param('term'),
  location: req.param('location')
}).then(response => {
  //console.log(response.jsonBody.businesses[0].name);
res.send(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
  res.send(e);
});
})
 
const server = app.listen(process.env.PORT||"8080",function(){
	const port = server.address().port;
	console.log("Emp App is listening on "+port);
	});
