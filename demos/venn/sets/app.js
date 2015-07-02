var app = angular.module('app', []);

app.directive('venn', function() {
	return {
		scope: {
			venn: '=',
			vennKey: '=?',
			vennMap: '&?'
		},
		restrict: 'AE',
		controller: function($scope, $element) {
			$scope.chartD3 = venn.VennDiagram();

			$scope.$watch('venn', function() {
				console.log('Venn data change', $scope.venn);
				var sets = [];

				if (!$scope.venn) {
					throw new Error('Venn data is invalid');
				} else if ($scope.vennKey) { // Use key method
					console.log('FIXME: Unsupported');
				} else if ($scope.vennMap) { // Use map method
					console.log('FIXME: Unsupported');
				} else { // Use plain set method
					sets = $scope.venn;
				}

				console.log('SET IS', sets);

				d3.select($element[0]).datum(sets).call($scope.chartD3);
			}, true);
		},
		link: function($scope, elem, attr, ctrl) {
		}
	}
});

app.controller('demoController', function($scope) {
	$scope.vennData = [
		{sets: ['Foo'], size: 12},
		{sets: ['Bar'], size: 12},
		{sets: ['Baz'], size: 12},
		{sets: ['Foo','Bar'], size: 2},
		{sets: ['Bar','Baz'], size: 2},
		{sets: ['Foo','Baz'], size: 2},
		{sets: ['Foo','Bar', 'Baz'], size: 1},
	];
});
