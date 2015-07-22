var app = angular.module('app', ['angular-bs-confirm']);

app.controller('demoController', function($scope, $interval) {
	$scope.time = null;
	$interval(function() {
		$scope.time = new Date().toString();
	}, 1000);

	$scope.doThing = function() {
		alert('Yey! You confirmed!');
	};

	$scope.doNotDoThing = function() {
		alert('Boo! You cancelled!');
	};
});
