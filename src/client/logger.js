var Logger = function(socket) {
    if(typeof window.console !== 'undefined' && console.log !== 'undefined') {

        var methods = {
            log: console.log,
            info: console.info,
            error: console.error,
            warning: console.warning
            },
            that = this;

        console.log = function() {
            var args = that.convert(Array.prototype.slice.call(arguments, 0));
            methods.log.apply(console, arguments);
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

Logger.prototype.convert = function(args) {
    var logging = [];
    for(var arg in args) {
        var type = typeof args[arg],
            content = args[arg];

        if(args[arg] instanceof HTMLElement) {
            type = 'html';
            content = args[arg].outerHTML;
        }

        logging.push({
            type: type,
            content: content
        });
    }

    return logging;
}

export default Logger;