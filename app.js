(function (){
	'use strict';

	angular.module('ngTooltip', [])

	.directive('tooltipClassic', [function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				tContent:'=',
				tImg:    '=',
				tStyle:  '='
			},
			controller: ['$scope', '$sce', function ($scope, $sce) {
				$scope.trustedHtmlContent = $sce.trustAsHtml($scope.tContent);
				$scope.tStyle = ($scope.tStyle > 0 && $scope.tStyle < 6) ? $scope.tStyle : 1;
			}],
			templateUrl: 'classic.html'
		};
	}])

	.run(function($templateCache) {
	  $templateCache.put('classic.html',
	  	'<span class="tooltip tooltip-effect-{{ tStyle }}">' +
	  		'<span class="tooltip-item">Euclid</span>' +
	  		'<span class="tooltip-content clearfix">' +
	  			'<img ng-if="tImg" ng-src="{{ ::tImg }}"/>' +
	  			'<span class="tooltip-text" ng-bind-html="trustedHtmlContent"></span>' +
	  		'</span>' +
	  	'</span>'
	  );
	});

})();

