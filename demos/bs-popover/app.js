var app = angular.module('app', ['angular-bs-popover']);

app.controller('demoController', function($scope, $interval) {
	$scope.time = null;
	$interval(function() {
		$scope.time = new Date().toString();
	}, 1000);
});
