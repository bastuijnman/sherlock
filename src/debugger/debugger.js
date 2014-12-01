import TreeNode from 'components/treenode';

(function() {
    if (typeof io !== 'undefined') {
        var socket = new io('http://localhost:7890');

        socket.on('debugger_dom', function (data) {
            React.renderComponent(
                React.createElement(TreeNode, {node: data.dom}),
                document.getElementById('dom-tree')
            );
        });

        socket.on('console.log', function (data) {
            for (var item in data) {
                document.getElementById('console').innerHTML += '<div class="row">' + data[item] + '</div>';
            }
        });

    } else {
        console.error('Sherlock wants to connect, but sockets are not available');
    }
})();