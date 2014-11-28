(function() {
    "use strict";
    function $$logger$$Logger(socket) {
        if(typeof window.console !== 'undefined' && console.log !== 'undefined') {
            var methods = {
                log: console.log,
                info: console.info,
                error: console.error,
                warning: console.warning
            };

            console.log = function() {
                methods.log.apply(console, arguments);
                socket.emit('console.log', arguments);
            };
            //console.log(console.log);
        }
    }
    var $$logger$$default = $$logger$$Logger;

    if (typeof io !== 'undefined') {

        var src$client$client$$socket = new io('http://localhost:7890'),
            src$client$client$$logger = new $$logger$$default(src$client$client$$socket);

        /**
         * Dirty hack to send loaded DOM when window is loaded
         */
        window.onload = function() {
            src$client$client$$socket.emit('dom', {
                tree: document.documentElement.outerHTML
            });
        }

    } else {
        console.error('Sherlock wants to connect, but sockets are not available');
    }
}).call(this);

//# sourceMappingURL=connector.js.map