import Item from 'components/console/item';

var Console = React.createClass({

    getInitialState: function() {
        return {
            children: []
        }
    },

    add: function(data) {
        var children = this.state.children.slice();

        for(var item in data.items) {
            children.push(React.createElement(Item, {
                type: data.type,
                item: data.items[item]
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

export default Console;