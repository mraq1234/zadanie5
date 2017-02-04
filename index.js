var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', 'utf-8', function(err, data){
            if (err) {
                throw err;
            }
            response.write(data);
            response.end();
        });    
    } else {
            response.statusCode = 404;
            response.write('<img src="http://shaebaxter.com/wp-content/uploads/2014/06/404-error-page-example.jpg">');
            response.end();
    }
});
server.listen(9000);