import Logger from 'logger';
import NetworkLogger from 'network';

// Data transformers
import XhrTransformer from 'transformer/xhr';

if (typeof io !== 'undefined') {

    var socket = new io('http://localhost:7890'),
        logger = new Logger(socket),
        networkLogger = new NetworkLogger(
            function(xhr) {
                
            },
            function(xhr) {
                socket.emit('network', {
                    'type': 'response',
                    'data': XhrTransformer(xhr)
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