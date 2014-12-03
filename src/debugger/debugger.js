import TreeNode from 'components/treenode';
import Console from 'components/console';
import Logger from 'logger';

(function() {
    if (typeof io !== 'undefined') {
        var socket = new io('http://localhost:7890');

        socket.on('dom', function (data) {
            React.renderComponent(
                React.createElement(TreeNode, {node: data.dom}),
                document.getElementById('dom-tree')
            );
        });

        Logger(React.renderComponent(
            React.createElement(Console),
            document.getElementById('console')
        ), socket);
    } else {
        console.error('Sherlock wants to connect, but sockets are not available');
    }
})();