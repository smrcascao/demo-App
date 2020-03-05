


const express = require('express');
var http = require('http'),
    fs = require('fs');

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});



// Constants
 const PORT = 8181;
 const HOST = '0.0.0.0';

 var os = require( 'os' );
 var networkInterfaces = os.networkInterfaces( );
// App

 const app = express();
 app.get('/', (req, res) => {
 res.write("Network: \n"+JSON.stringify(networkInterfaces) );
  res.write("\n\nHostname: \n"+JSON.stringify(os.hostname()  ));
	res.write("\n\nPlatform: \n"+JSON.stringify(os.platform()) );
	res.write("\n\nCPU: \n"+JSON.stringify(os.cpus()) );
	res.write("\n\nUptime: \n"+JSON.stringify(os.uptime()) );
	 });
 app.get('/networkInterfaces', (req, res) => {
 res.send(networkInterfaces );
   });

 app.get('/hostname', (req, res) => {
 res.send(os.hostname() );
 	});

	app.get('/platform', (req, res) => {
  res.send(os.platform() );
  	});

app.get('/cpu', (req, res) => {
  res.send(os.cpus() );
  	});




function fib(n) {
	if(n > 1){
		return fib(n-1) + fib(n-2)
	} else {
		return n;
		}
}

app.get('/fibonacci/:n', (req, res, next) => {

if (!isNaN((req.params.n))) {
  const timeBefore = Date.now();
  var result = fib(req.params.n)
  time= (Date.now() - timeBefore)
  console.log(time)
    console.log({ fibonacci: req.params.n.toString(),result: result.toString(),ExecutionTime: time.toString()+ 'ms' });
    res.status(200).send({ fibonacci: req.params.n.toString(),result: result.toString(),ExecutionTime: time.toString()+' ms' });
}
else {
  console.log({ Error: req.params.n.toString()+' - is not number' });
  res.status(400).send({ Error: req.params.n.toString()+' - is not number' });

}


});



 app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
