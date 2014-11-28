module.exports = {

    /**
     * Parse a string to a Virtual DOM object
     * @param data
     */
    parse: function(data) {
        var Html5Parser = require('parse5').Parser,
            parser = new Html5Parser(),
            document = parser.parse(data),
            virtual = {};

        virtual = this.tree(document.childNodes[0]);

        return virtual;
    },

    tree: function(node) {
        var tree = {};
        tree['name'] = node['nodeName'];
        tree['attrs'] = node['attrs'];

        if(node['nodeName'] === '#text') {
            tree['value'] = node['value'];
        }

        tree['children'] = [];

        for(var child in node.childNodes) {
            tree['children'].push(this.tree(node.childNodes[child]))
        }

        return tree;
    }

};