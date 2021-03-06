module.exports = function(port, host) {
    var serverHandler = require('./handler'),
        server = require('http').createServer(serverHandler),
        io = require('socket.io')(server);

    io.on('connection', function (socket) {

        socket.on('dom', function (data) {
            var vdom = require('./vdom/vdom'),
                v = vdom.parse(data.tree);

            io.sockets.emit('dom', {
                dom: v
            });
        });

        socket.on('console', function(data) {
            for(var item in data.items) {
                if(data.items[item].type === 'html') {
                    data.items[item]
                }
            }
            io.sockets.emit('console', data);
        });

        socket.on('network', function(data) {
            io.sockets.emit('network', data);
        });
    });

    server.listen(port, host);
    console.log('Roger that Watson, doing research at ' + host + ': ' + port);
}