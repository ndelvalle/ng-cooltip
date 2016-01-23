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
		'ng-cooltip'
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
	  		'<cooltip-classic cooltip-item="\'Lorem\'" cooltip-effect="1" cooltip-content="Ctrl.ttcontent"></cooltip-classic> ',
	  		'ipsum dolor sit amet, has in dico ',
	  		'<cooltip-classic cooltip-item="\'lobortis\'" cooltip-effect="2" cooltip-content="Ctrl.ttcontent"></cooltip-classic> ',
	  		'expetendis, per nibh vero mutat no. Qui no copiosae ',
	  		'<cooltip-classic cooltip-item="\'deserunt\'" cooltip-effect="3" cooltip-content="Ctrl.ttcontent"></cooltip-classic>',
	  		'. Vix in delenit omittam elaboraret, ut ',
	  		'<cooltip-classic cooltip-item="\'idque\'" cooltip-effect="4" cooltip-content="Ctrl.ttcontent"></cooltip-classic> ',
	  		'atqui deleniti qui. Quo nisl fuisset id. Ut veniam mollis vix. Veniam iudicabit no pri, ne eam sale cetero ',
	  		'<cooltip-classic cooltip-item="\'reprehendunt\'" cooltip-effect="5" cooltip-content="Ctrl.ttcontent"></cooltip-classic>.',
	  	'</p>'
	  ].join('\n'));

	  $templateCache.put('partials/round.html',[
	  	'<ul>',
	  		'<li>',
	  			'<cooltip-round ng-repeat="item in Ctrl.list" cooltip-item="item.name" cooltip-effect="item.effect" cooltip-content="item.content"></cooltip-round>',
	  		'</li>',
	  	'</ul>'
	  ].join('\n'));

	}]);

})();
