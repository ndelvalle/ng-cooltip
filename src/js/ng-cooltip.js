(function (){
	'use strict';

	angular.module('ng-cooltip', [])

	.directive('cooltip', [function () {
		return {
			restrict: 'AE',
			scope: {
				item:    '=cooltipItem',
				content: '=cooltipContent',
				effect:  '=cooltipEffect'
			},
			controller: coolTipController,
      controllerAs: 'vm',
      bindToController: true,
			templateUrl: templateUrl
		};
	}])

	.run(runTemplateCache);

  coolTipController.$inject = ['$sce'];
  function coolTipController($sce) {
    this.trustedHtmlContent = $sce.trustAsHtml(this.content);
    this.effect = (this.effect > 0 && this.effect < 6) ? this.effect : 1;
  }

  function templateUrl(elem, attrs) {
    return (attrs.cooltipType || 'classic') + '.html';
  }

  runTemplateCache.$inject = ['$templateCache'];
  function runTemplateCache($templateCache) {
    $templateCache.put('classic.html', [
      '<span id="ng-cooltip">',
        '<span id="cooltip-classic">',
          '<span class="tooltip tooltip-effect-{{ vm.effect }}">',
            '<span class="tooltip-item">{{ vm.item }}</span>',
            '<span class="tooltip-content">',
              '<span class="tooltip-text" ng-bind-html="vm.trustedHtmlContent"></span>',
            '</span>',
          '</span>',
        '</span>',
      '</span>'
    ].join('\n'));

    $templateCache.put('box.html', [
      '<span id="ng-cooltip">',
        '<span id="cooltip-box">',
          '<span class="tooltip tooltip-effect-{{ vm.effect }}">',
            '<span class="tooltip-item">{{ vm.item }}</span>',
            '<span class="tooltip-content">',
              '<span class="tooltip-text" ng-bind-html="vm.trustedHtmlContent"></span>',
            '</span>',
          '</span>',
        '</span>',
      '</span>'
    ].join('\n'));

    $templateCache.put('round.html', [
      '<span id="ng-cooltip">',
        '<span id="cooltip-round">',
          '<a class="tooltip tooltip-effect-{{ vm.effect }}" href="#"> {{ vm.item }}',
           '<span class="tooltip-content" ng-bind-html="vm.trustedHtmlContent"></span>',
          '</a>',
        '</span>',
      '</span>'
    ].join('\n'));
  }

})();
