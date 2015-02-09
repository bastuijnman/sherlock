var Transformer = function(xhr) {

	var result = {
		request: {
			status: xhr.status,
			statusText: xhr.statusText
		},
		response: {
			headers: xhr.getAllResponseHeaders(),
			url: xhr.responseURL,
			responseText: xhr.responseText,
			time: xhr.responseTime
		}
	};

	return result;

};

export default Transformer;