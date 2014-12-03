export default { 

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