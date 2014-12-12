var Response = React.createClass({
	render: function() {
		return React.createElement('span', {}, this.props.item.response.responseText);
	}
});

export default Response;