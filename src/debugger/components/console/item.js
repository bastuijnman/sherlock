var Item = React.createClass({

    render: function() {
        return React.createElement('pre', {className: 'item'}, this.props.line);
    }

});

export default Item;