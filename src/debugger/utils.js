export default { 

	/**
	 * Allow switching components by removing/adding active class
	 * @param  {String} id The ID for the DOM element which needs to be activated
	 */
	switchToComponent: function(id) {
		var component = document.getElementById(id);

		if(!component) {
			throw Error('This component does not exist')
		}

		[].forEach.call(document.querySelectorAll('.component'), function(element) {
	        element.classList.remove('active');
	    });
	    document.getElementById(id).classList.add('active');
	}

};