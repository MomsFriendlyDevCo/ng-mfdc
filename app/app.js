var app = angular.module('app', [
	// angular-snippets
	'Snippets', 'SnippetsThemeBootstrapTabs'
]);

app.config(function($compileProvider) {
	if (!location.host.match(/^local/)) {
		// Disabled in production for performance boost
		$compileProvider.debugInfoEnabled(false);
	}
});
