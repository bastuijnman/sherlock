var Item = React.createClass({

    getInitialState: function() {
        return {
            collapsed: true
        };
    },

    render: function() {
        var classes = ['item'],
            item = this.props.item,
            filename = item.response.url.split('/').slice(-1)[0];

        if(!this.state.collapsed) {
            classes.push('active');
        }

        return React.createElement('div', {className: classes.join(' '), onClick: this.toggle},
            React.createElement('div', {className: 'info'},
                React.createElement('span', {className: 'filename'}, filename)
            )
        );
    },

    toggle: function() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
});

export default Item;