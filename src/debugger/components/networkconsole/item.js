var Item = React.createClass({

    render: function() {
        switch(this.props.item.type) {
            case 'string':
                return React.createElement('pre', {className: 'item ' + this.props.type}, this.props.item.status + ', ' + this.props.item.responseURL + ', ' + this.props.item.responseText);
                break;
            default:
                return React.createElement('pre', {className: 'item ' + this.props.type}, this.props.item.status + ', ' + this.props.item.responseURL + ', ' + this.props.item.responseText);
                break;
        }
    }
});

export default Item;