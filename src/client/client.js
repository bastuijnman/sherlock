import Logger from 'logger';
import CssTransformer from 'transformer/css';

if (typeof io !== 'undefined') {

    var socket = new io('http://localhost:7890'),
        logger = new Logger(socket);

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