var Preview = React.createClass({

	render: function() {
		return React.createElement('div');
	},

	componentDidMount: function() {

		function strip(html) {
			var div = document.createElement('div');
			div.innerHTML = html;
			var scripts = div.getElementsByTagName('script'),
				has = scripts.length;
			while(has--) {
				scripts[has].parentNode.removeChild(scripts[has]);
			}
			return div.innerHTML;
		}

		this.getDOMNode().innerHTML = strip(this.props.item.response.responseText);
	}

});

export default Preview;