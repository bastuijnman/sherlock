var rootEvent,
    TreeNode = React.createClass({

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

    onSelectItem: function() {
        // Proxy through to DOM container
        this.props.onSelectItem(this.props.node);
    },

    render: function() {

        if(typeof rootEvent === 'undefined') {
            rootEvent = this.props.onSelectItem;
        }

        var children = this.props.node.children.map(function(node, index) {
            return React.createElement('li', null,
                React.createElement(TreeNode, { node: node, onSelectItem:rootEvent})
            );
        }.bind(this));

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

        var style = {},
            classes = ['fa'];
        if(this.state.collapsed) {
            style.display = 'none';
        }

        if(children.length > 0) {
            classes.push(this.state.collapsed ? 'fa-chevron-right' : 'fa-chevron-down');
        }

        return React.createElement('div', {className:'line'},
            React.createElement('i', {onClick: this.toggle, className: classes.join(' ')}),
            React.createElement('pre', {onClick:this.onSelectItem}, value),
            React.createElement('ul', {style: style}, children)
        );
    }
});

export default TreeNode;