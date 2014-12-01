import Item from 'components/console/item';

var Console = React.createClass({

    getInitialState: function() {
        return {
            children: []
        }
    },

    add: function(data) {
        this.setState({
            children: this.state.children.concat([React.createElement(Item, {line:data})])
        });
    },

    render: function() {
        return React.createElement('div', {className:'console'}, this.state.children);
    }

});

export default Console;