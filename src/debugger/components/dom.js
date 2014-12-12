import TreeNode from 'components/treenode';

var DOM = React.createClass({
	
	render: function() {
		return React.createElement(TreeNode, {node:this.props.dom, onSelectItem:this.selectItem});
	},

	selectItem: function(item) {
		console.log(item);
	}

});

export default DOM;