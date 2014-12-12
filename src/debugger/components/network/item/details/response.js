var Response = React.createClass({
	render: function() {
		return React.createElement('span', { className: 'response' }, this.props.item.response.responseText);
	}
});

export default Response;