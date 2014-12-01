var ObjectItem = React.createClass({

    render: function() {
        return React.createElement('pre', {className:'item ' + this.props.type}, JSON.stringify(this.props.children));
    }

});

export default ObjectItem;