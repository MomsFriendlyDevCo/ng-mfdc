var app = angular.module('app', [
]);

app.config(function($compileProvider) {
	if (!location.host.match(/^local/)) {
		// Disabled in production for performance boost
		$compileProvider.debugInfoEnabled(false);
	}
});
