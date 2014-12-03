var Router = {

	/**
	 * Router type, either history or hash
	 * @type {String}
	 */
	type: (typeof window.History === 'function')?'history':'hash',

	/**
	 * An array containing all of the routes
	 * @type {Array}
	 */
	routes: [],

	/**
	 * The root URL for routing
	 * @type {String}
	 */
	rootUrl: '/',

	/**
	 * Add a new route
	 * @param {String} url     The URL string
	 * @param {Function} handler Callback handler
	 */
	add: function(url, handler) {
		this.routes.push({
			url: url,
			handler: handler
		});
		return this;
	},

	run: function() {
		var elements = document.querySelectorAll('a[data-route]'),
			that = this;

		[].forEach.call(elements, function(element) {
			element.addEventListener('click', function(evnt) {
				that._handler(evnt);
			});
		});
	},

	_handler: function(evnt) {
		var that = this;

		if(this.type === 'history') {
			history.pushState(null, evnt.target.textContent, evnt.target.href);

			var routes = this.routes.filter(function(value, index) {
				return value.url === evnt.target.getAttribute('href');
			});

			routes.forEach(function(route) {
				route.handler.apply(that);
			});

			evnt.preventDefault();
		}
	}

};

export default Router;