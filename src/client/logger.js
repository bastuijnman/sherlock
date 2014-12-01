export default function Logger(socket) {
    if(typeof window.console !== 'undefined' && console.log !== 'undefined') {

        var methods = {
            log: console.log,
            info: console.info,
            error: console.error,
            warning: console.warning
        };

        window.console.log = function() {
            methods.log.apply(console, arguments);
            socket.emit('logger', arguments);
        };
        //console.log(console.log);
    }
};