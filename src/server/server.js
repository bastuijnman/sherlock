module.exports = function(port) {
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

        socket.on('console.log', function(data) {
            io.sockets.emit('console.log', data);
        });
    });

    server.listen(port);
    console.log('Roger that Watson, doing research at port: ', port);
}