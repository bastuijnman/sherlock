Object.filter = function(object, callback) {
	var result = {}, key;
	for(key in object) {
		if(object.hasOwnProperty(key) && callback(key, object[key])) {
			result[key] = object[key];
		}
	}
	return result;
};

var Transformer = function(stylesheets) {

	var result = [],
		length = stylesheets.length,
		i;

	for(i = 0; i < length; i++) {
		var rules = stylesheets[i].cssRules,
			rulesLength = rules.length,
			j;

		for(j = 0; j < rulesLength; j++) {
			
			result.push({
				type: typeof stylesheets[i].href === 'undefined' ? 'inline' : 'file',
				selector: rules[j].selectorText,
				styles: Object.filter(rules[j].style, function(key, value) {
					return value !== '' && typeof value === 'string' && isNaN(parseInt(key));
				})
			});
		}
	}
	console.log(result);
	return result;
};

export default Transformer;