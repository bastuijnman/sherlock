import Headers from 'components/network/item/details/headers';
import Preview from 'components/network/item/details/preview';
import Response from 'components/network/item/details/response';
import Timing from 'components/network/item/details/timing';

var tabs = ['headers', 'preview', 'response', 'timing'],
	contents = {headers:Headers, preview:Preview, response:Response, timing:Timing},

	TabSwitcher = React.createClass({

		render: function() {
			var items = tabs.map(function(item) {
				var classes = [];
				
				if(this.props.activeTab === item)
					classes.push('active');

				return React.createElement('a', { className: classes.join(' '), onClick: this.click.bind(this, item) }, item)
			}.bind(this));

			return React.createElement('div', {className:'tabs-nav'}, items);
		},

		click: function(item) {
			this.props.onTabClick(item);
		}

	}),

	TabContent = React.createClass({

		render: function() {
			var items = tabs.map(function(item) {
				var classes = ['content'],
					content = contents[item];

				if(this.props.activeTab === item)
					classes.push('active');

				return React.createElement('div', {className:classes.join(' ')}, 
					React.createElement(content, {item: this.props.item})
				);
			}.bind(this));
			return React.createElement('div', {className:'tabs-content'}, items);
		}

	}),

	Details = React.createClass({

		getInitialState: function() {
			return {
				activeTab: 'headers'
			};
		},

		handleTabClick: function(item) {
			this.setState({
				activeTab: item
			});
		},

		render: function() {
			return React.createElement('div', {className:'detail'}, 
				React.createElement(TabSwitcher, { onTabClick: this.handleTabClick, activeTab: this.state.activeTab }),
				React.createElement(TabContent, { activeTab: this.state.activeTab, item: this.props.item })
			);
		}

	});

export default Details;