	requirejs.config({
		baseUrl:"js",
		waitSeconds: 200,
		paths: {
			'jquery': 'jquery'
		}
	});
	requirejs(['app/index'])