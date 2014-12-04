import ObjectItem from 'components/console/item/object';
import TreeNode from 'components/treenode';

var Item = React.createClass({

    render: function() {

        switch(this.props.item.type) {
            case 'string':
                return React.createElement('pre', {className: 'item ' + this.props.type}, this.props.item.content);
                break;
            case 'object':
                return React.createElement(ObjectItem, {className:'item'}, this.props.item.content);
                break;
            default:
                return React.createElement('pre', {className: 'item ' + this.props.type}, this.props.item.content);
                break;
        }
    }

});

export default Item;