var Timing = React.createClass({
	render: function() {
		return React.createElement('div', {}, 'Response time: ' + this.props.item.response.time + ' ms');
	}
});

export default Timing;