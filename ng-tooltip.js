(function (){
	'use strict';

	angular.module('ngTooltip', [])

	.directive('tooltipClassic', [function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				content:'=tooltipContent',
				effect: '=tooltipEffect',
			},
			controller: ['$scope', '$sce', function ($scope, $sce) {
				$scope.trustedHtmlContent = $sce.trustAsHtml($scope.content);
				$scope.effect = ($scope.effect > 0 && $scope.effect < 6) ? $scope.effect : 1;
			}],
			templateUrl: 'classic.html'
		};
	}])

	.run(function($templateCache) {
	  $templateCache.put('classic.html',
	  	'<span class="tooltip tooltip-effect-{{ effect }}">' +
	  		'<span class="tooltip-item">Euclid</span>' +
	  		'<span class="tooltip-content clearfix">' +
	  			'<img ng-if="image" ng-src="{{ image }}"/>' +
	  			'<span class="tooltip-text" ng-bind-html="trustedHtmlContent"></span>' +
	  		'</span>' +
	  	'</span>'
	  );
	});

})();

