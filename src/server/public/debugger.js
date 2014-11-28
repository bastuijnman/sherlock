window.onload = function() {

    var TreeNode = React.createClass({

        getInitialState: function() {
            return {
                collapsed: true
            }
        },

        toggle: function() {
            this.setState({
                collapsed: !this.state.collapsed
            });
        },

        render: function() {

            var children = this.props.node.children.map(function(node, index) {
                return <li><TreeNode node={node} /></li>
            });

            var attrs = [];
            if(typeof this.props.node.attrs !== 'undefined') {
                var attributes = this.props.node.attrs;
                for(var attribute in attributes) {
                    attrs.push(attributes[attribute].name + '="' + attributes[attribute].value + '"');
                }
            }

            var value = '<' + this.props.node.name + ((attrs.length > 0) ? ' ': '') + attrs.join(' ') + '>';

            if(this.props.node.name === '#text') {
                value = this.props.node.value;

                if(value.trim().length === 0) {
                    return <span></span>;
                }
            }

            var style = {};
            if(this.state.collapsed) {
                style.display = 'none';
            }

            return(
                <div className="line">
                    <pre onClick={this.toggle}>{value}</pre>
                    <ul style={style}>{children}</ul>
                </div>
            );
        }
    })

    if (typeof io !== 'undefined') {
        var socket = new io('http://localhost:7890');

        socket.on('debugger_dom', function(data) {
            React.renderComponent(
                <TreeNode node={data.dom} />,
                document.getElementById('dom-tree')
            );
        });

    } else {
        console.error('Sherlock wants to connect, but sockets are not available');
    }
};