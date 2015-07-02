var app = angular.module('app', ['angular-venn']);

app.controller('demoController', function($scope) {
	$scope.vennData = [
		{tags: ['foo'], size: 11},
		{tags: ['foo'], size: 1}, // These get added together
		{tags: ['bar'], size: 6},
		{tags: ['bar'], size: 12},
		{tags: ['bar', 'baz']}, // This is worth one if 'size' is not specified
		{tags: ['bar', 'baz'], size: 6},
	];
});
