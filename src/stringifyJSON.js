// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (obj && typeof obj === 'object') {
		if (Object.prototype.toString.apply(obj) === '[object Array]') {
			for (var i = 0; i < obj.length; i++) {
				obj[i] = stringifyJSON(obj[i]);
			}
			return '[' + obj.join(',') + ']';
		} else {
			var holder = [];
			for (var key in obj) {
				if (obj[key] !== undefined && typeof obj[key] !== 'function') {
					holder.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));	
				}				
			}
			return '{' + holder.join(',') + '}';
		}
	} else if (typeof obj === 'string') {
		return '"' + obj + '"';
	} else {
		return String(obj);
	}
};
