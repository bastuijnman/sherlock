import Logger from 'logger';
import NetworkLogger from 'network';

if (typeof io !== 'undefined') {

    var socket = new io('http://localhost:7890'),
        logger = new Logger(socket),
        networkLogger = new NetworkLogger(
            function(xhr) {
                // TODO: emit data to socket with type 'request'
            },
            function(xhr) {
                socket.emit('networkconsole', {
                    'type': 'response',
                    'data': xhr
                });
            }
        );

    /**
     * Dirty hack to send loaded DOM when window is loaded
     */
    (function() {
        socket.emit('dom', {
            tree: document.documentElement.outerHTML
        });
    })();

} else {
    console.error('Sherlock wants to connect, but sockets are not available');
}