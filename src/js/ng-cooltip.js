(function (){
	'use strict';

	var commonCtrl = ['$scope', '$sce', function ($scope, $sce) {
		$scope.trustedHtmlContent = $sce.trustAsHtml($scope.content);
		$scope.effect = ($scope.effect > 0 && $scope.effect < 6) ? $scope.effect : 1;
	}];

	var commonScope = {
		item:    '=cooltipItem',
		content: '=cooltipContent',
		effect:  '=cooltipEffect'
	};

	angular.module('ng-cooltip', [])

	.directive('cooltipClassic', [function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: commonScope,
			controller: commonCtrl,
			templateUrl: 'classic.html'
		};
	}])

	.directive('cooltipRound', [function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: commonScope,
			controller: commonCtrl,
			templateUrl: 'round.html'
		};
	}])

	.run(['$templateCache', function($templateCache) {

	  $templateCache.put('classic.html', [
	  	'<span class="tooltip tooltip-effect-{{ effect }}">',
	  		'<span class="tooltip-item">{{ item }}</span>',
	  		'<span class="tooltip-content clearfix">',
	  			'<span class="tooltip-text" ng-bind-html="trustedHtmlContent"></span>',
	  		'</span>',
	  	'</span>'
	  ].join('\n'));

	  $templateCache.put('round.html', [
	  	'<a class="tooltip tooltip-effect-{{ effect }}" href="#"> {{ item }}',
	  		'<span class="tooltip-content" ng-bind-html="trustedHtmlContent"></span>',
	  	'</a>'
	  ].join('\n'));

	}]);

})();

