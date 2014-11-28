window.onload = function() {
    if (typeof io !== 'undefined') {

        var socket = new io('http://localhost:7890');

        socket.emit('dom', {
            tree: document.documentElement.outerHTML
        });

    } else {
        console.error('Sherlock wants to connect, but sockets are not available');
    }
};