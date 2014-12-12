var Item = React.createClass({

    getInitialState: function() {
        return {
            collapsed: true
        };
    },

    render: function() {
        var classes = ['item'],
            item = this.props.item,
            filename = item.response.url.split('/').slice(-1)[0],
            filepath = item.response.url.split('/');

        // Remove filename from path
        filepath.pop();
        filepath = filepath.join('/');
        if(filename === '') {
            filename = filepath;
            filepath = '/';
        }

        if(!this.state.collapsed) {
            classes.push('active');
        }

        return React.createElement('div', {className: classes.join(' '), onClick: this.toggle},
            React.createElement('div', {className: 'info'},
                React.createElement('span', {className: 'status'}, item.request.status),
                React.createElement('span', {className: 'filename'}, filename),
                React.createElement('span', {className: 'filepath'}, filepath)
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