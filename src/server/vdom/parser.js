module.exports = {

    currentLevel: 0,

    tag: /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,

    parseTree : function(data) {
        while(data) {

            if(data.indexOf('<') === 0) {
                var match = data.match(this.tag);
                if(match) {
                    data = data.substring(match[0].length);
                }
            }

        }
    }
};