export default function NetworkLogger(requestCallback, responseCallback) {

    var COMPLETED_READY_STATE = 4;

    function callResponseCallback(xhr) {
        if(xhr.readyState === COMPLETED_READY_STATE) {
            responseCallback(xhr);
        }
    }

    function extendOnReadyStateChange(xhr) {
        (function(onreadystatechange) {
            xhr.onreadystatechange = function() {
                if(xhr.readyState === COMPLETED_READY_STATE) {
                    callResponseCallback(xhr);
                }
                onreadystatechange();
            }
        }(xhr.onreadystatechange))
    }

    (function(send) {
        XMLHttpRequest.prototype.send = function () {
            // TODO: Need fix for the request when calling the request callback
            // The reqeust is now not being sent when calling the callback
            requestCallback(this);
            if (this.addEventListener) {
                var self = this;
                this.addEventListener("readystatechange", function () {
                    callResponseCallback(self);
                }, false);
            } else {
                extendOnReadyStateChange(this);
            }
            send.apply(this, arguments);
        }
    }(XMLHttpRequest.prototype.send));

    (function(setRequestHeader) {
        XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
            if(typeof this.requestHeaders === 'undefined') {
                this.requestHeaders = [];
            }
            this.requestHeaders.push(header + ':' + value);
            
            setRequestHeader.apply(this, arguments);
        }
    }(XMLHttpRequest.prototype.setRequestHeader));
};
