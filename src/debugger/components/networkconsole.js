import Item from 'components/networkconsole/item';

var NetworkConsole = React.createClass({

    getInitialState: function() {
        return {
            children: []
        }
    },

    add: function(data) {
        var children = this.state.children.slice();

        if (data.item.type === 'response') {
            children.push(React.createElement(Item, {
                type: 'html',
                item: data.item.data
            }));
        }

        this.setState({
            children: children
        });
    },

    clear: function() {
        this.setState({
            children: []
        });
    },

    render: function() {
        return React.createElement('div', {className:'console'}, this.state.children);
    }

});

export default NetworkConsole;