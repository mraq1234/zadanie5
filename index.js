var http = require('http');
var fs = require('fs');
var server = http.createServer();

function errMsgToBrowser(response) {
    response.statusCode = 404;
    response.write('<img src="http://shaebaxter.com/wp-content/uploads/2014/06/404-error-page-example.jpg">');
    response.end();
}

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', 'utf-8', function (err, data) {
            if (err) {
                console.error('wystąpił problem podczas odczytu pliku: ', err.message);
                errMsgToBrowser(response);
            } else {
                response.write(data);
                response.end();
            }
        });
    } else {
        errMsgToBrowser(response);
    }
});
server.listen(9000);