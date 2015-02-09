var Headers = React.createClass({
	
	render: function() {

		var responseHeaders = this.props.item.response.headers.split('\n'),
			children = responseHeaders.map(function(item) {
				var header = item.split(':');
				return React.createElement('div', { className: 'header' }, 
					React.createElement('span', { className: 'key' }, header[0] + ':'),
					React.createElement('span', { className: 'value' }, header[1])
				);
			});

		return React.createElement('div', {}, 
			React.createElement('strong', {}, 'Response Headers:'),
			children
		);
	}

});

export default Headers;