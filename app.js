(function () {
	'use strict';

	var globalCtrl = [function () {
		this.ttcontent = 'Vel ut solum erant dicit, eum te aperiam efficiendi, et eos alia eruditi persecuti. Ius ex omnis voluptatum';
	}];

	var roundCtrl = [function () {
		this.list = [{
			name: 'Home',
			effect: 1,
			content: '<i class="fa fa-fw fa-home"></i>'
		}, {
			name: 'About me',
			effect: 2,
			content: '<i class="fa fa-fw fa-user"></i>'
		}, {
			name: 'Photography',
			effect: 3,
			content: '<i class="fa fa-fw fa-camera-retro"></i>'
		}, {
			name: 'Work',
			effect: 4,
			content: '<i class="fa fa-fw fa-briefcase"></i>'
		}, {
			name: 'Contact',
			effect: 5,
			content: '<i class="fa fa-fw fa-envelope"></i>'
		}];
	}];

	angular.module('app', [
		'ui.router',
		'ng-tooltip'
	])

	.config(function($stateProvider, $urlRouterProvider) {

	  $urlRouterProvider.otherwise('/classic');

	  $stateProvider

	    .state('classic', {
	      url: '/classic',
	      controller: globalCtrl,
	      controllerAs: 'Ctrl',
	      templateUrl: 'partials/classic.html',
	    })

	    .state('box', {
	      url: '/box',
	      controller: globalCtrl,
	      controllerAs: 'Ctrl',
	      templateUrl: 'partials/classic.html'
	    })

	    .state('round', {
	      url: '/round',
	      controller: roundCtrl,
	      controllerAs: 'Ctrl',
	      templateUrl: 'partials/round.html'
	    });
	})

	.run(['$rootScope', '$state', function ($rootScope, $state) {
	  $rootScope.$state = $state;
	}])

	.run(['$templateCache', function($templateCache) {

	  $templateCache.put('partials/classic.html',[
	  	'<p>',
	  		'<tooltip-classic tooltip-item="\'Lorem\'" tooltip-effect="1" tooltip-content="Ctrl.ttcontent"></tooltip-classic> ',
	  		'ipsum dolor sit amet, has in dico ',
	  		'<tooltip-classic tooltip-item="\'lobortis\'" tooltip-effect="2" tooltip-content="Ctrl.ttcontent"></tooltip-classic> ',
	  		'expetendis, per nibh vero mutat no. Qui no copiosae ',
	  		'<tooltip-classic tooltip-item="\'deserunt\'" tooltip-effect="3" tooltip-content="Ctrl.ttcontent"></tooltip-classic>',
	  		'. Vix in delenit omittam elaboraret, ut ',
	  		'<tooltip-classic tooltip-item="\'idque\'" tooltip-effect="4" tooltip-content="Ctrl.ttcontent"></tooltip-classic> ',
	  		'atqui deleniti qui. Quo nisl fuisset id. Ut veniam mollis vix. Veniam iudicabit no pri, ne eam sale cetero ',
	  		'<tooltip-classic tooltip-item="\'reprehendunt\'" tooltip-effect="5" tooltip-content="Ctrl.ttcontent"></tooltip-classic>.',
	  	'</p>'
	  ].join('\n'));

	  $templateCache.put('partials/round.html',[
	  	'<ul>',
	  		'<li>',
	  			'<tooltip-round ng-repeat="item in Ctrl.list" tooltip-item="item.name" tooltip-effect="item.effect" tooltip-content="item.content"></tooltip-round>',
	  		'</li>',
	  	'</ul>'
	  ].join('\n'));

	}]);

})();
