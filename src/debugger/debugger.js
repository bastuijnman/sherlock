//import React from '../../../bower_components/react/react'; // Resolve from bin folder :(
import Console from 'components/console';
import DOM from 'components/dom';
import Logger from 'logger';
import Router from 'router';
import Utils from 'utils';

(function() {
    if (typeof io !== 'undefined') {
        var socket = new io('http://localhost:7890');

        socket.on('dom', function (data) {
            React.renderComponent(
                React.createElement(DOM, {dom: data.dom}),
                document.getElementById('elements')
            );
        });

        Logger(React.renderComponent(
            React.createElement(Console),
            document.getElementById('console')
        ), socket);

        Router.
            add('console', function() {
                Utils.switchToComponent('console');
            }).
            add('elements', function() {
                Utils.switchToComponent('elements');
            }).
            add('network', function() {
                Utils.switchToComponent('network')
            }).
            run();

    } else {
        console.error('Sherlock wants to connect, but sockets are not available');
    }
})();