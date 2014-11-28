var fs = require('fs');

module.exports = function(request, response) {

    var url = require('url').parse(request.url, true);

    if(url.pathname === '/' || url.pathname === '') {
        fs.readFile(__dirname + '/public/view/index.html', function(error, data) {
            if(error) {
                response.writeHead(500);
                response.end('Error loading sherlock view');
                return response;
            }

            response.writeHead(200);
            response.end(data);
            return response;
        });
    }

    fs.readFile(__dirname + '/public/' + url.pathname, function(error, data) {
        if(error) {
            response.writeHead(500);
            response.end('Blimey! Sherlock could not locate the file');
            return response;
        }

        if(url.pathname.indexOf('.js') > -1) {
            response.setHeader('Content-Type', 'application/javascript');
        }

        response.writeHead(200);
        response.end(data);
        return response;
    });

};