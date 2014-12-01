export default function Logger(socket) {
    if(typeof window.console !== 'undefined' && console.log !== 'undefined') {

        var methods = {
            log: console.log,
            info: console.info,
            error: console.error,
            warning: console.warning
        };

        console.log = function() {

            var args = Array.prototype.slice.call(arguments, 0);
            for(var arg in args) {
                if(args[arg] instanceof HTMLElement) {
                    args[arg] = args[arg].outerHTML;
                }
            }

            methods.log.apply(console, args);
            socket.emit('console', {
                args: args,
                type: 'log'
            });
        };

        console.error = function() {
            methods.error.apply(console, arguments);
            socket.emit('console', {
                args: arguments,
                type: 'error'
            });
        };

    }
};