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
            //return <li><TreeNode node={node} /></li>
            return React.createElement('li', null,
                React.createElement(TreeNode, { node: node})
            );
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
                return React.createElement('span');
            }
        }

        var style = {};
        if(this.state.collapsed) {
            style.display = 'none';
        }

        return React.createElement('div', {className:'line'},
            React.createElement('pre', {onClick: this.toggle}, value),
            React.createElement('ul', {style: style}, children)
        );
    }
});

export default TreeNode;