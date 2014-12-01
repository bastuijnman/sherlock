import ObjectItem from 'components/console/item/object';
import TreeNode from 'components/treenode';

var Item = React.createClass({

    render: function() {

        if(typeof this.props.content === 'string') {
            return React.createElement('pre', {className: 'item ' + this.props.type}, this.props.content);
        }

        if(typeof this.props.content === 'object') {
            return React.createElement(ObjectItem, {className:'item'}, this.props.content);
        }
    }

});

export default Item;