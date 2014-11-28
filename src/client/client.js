import Logger from './logger';

if (typeof io !== 'undefined') {

    var socket = new io('http://localhost:7890'),
        logger = new Logger(socket);

    /**
     * Dirty hack to send loaded DOM when window is loaded
     */
    window.onload = function() {
        socket.emit('dom', {
            tree: document.documentElement.outerHTML
        });
    }

} else {
    console.error('Sherlock wants to connect, but sockets are not available');
}