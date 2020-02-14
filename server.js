

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
 const PORT = 81;
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



 app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
