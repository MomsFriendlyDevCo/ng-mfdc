var app = angular.module('app', ['angular-bs-text-highlight']);

app.controller('demoController', function($scope) {
	$scope.terms = ['taciti', 'cras', 'amet', 'euismod', 'vitae'];
	$scope.termWrapper = '<span class="label label-info">{{item.text}}</span>';
});
