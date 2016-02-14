(function () {
	'use strict';

	var globalCtrl = [function () {
		this.ttcontent = '<span>Vel ut solum erant dicit, eum te aperiam efficiendi, <strong>et eos alia eruditi persecuti</strong>. Ius ex omnis voluptatum</span>';
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

	function getState(type) {
		return {
			url: '/' + type,
			controller: type === 'round' ? roundCtrl : globalCtrl,
			controllerAs: 'Ctrl',
			templateUrl: 'partials/' + type + '.html'
		};
	}

	angular.module('app', [
		'ui.router',
		'ng-cooltip'
	])

	.config(function($stateProvider, $urlRouterProvider) {

	  $urlRouterProvider.otherwise('/classic');

	  $stateProvider
	    .state('classic', getState('classic'))
	    .state('box', getState('box'))
	    .state('round', getState('round'));
	})

	.run(['$rootScope', '$state', function ($rootScope, $state) {
	  $rootScope.$state = $state;
	}])

	.run(['$templateCache', function($templateCache) {

	  $templateCache.put('partials/classic.html',[
	  	'<p>',
	  		'<cooltip cooltip-type="classic" cooltip-item="\'Lorem\'" cooltip-effect="1" cooltip-content="Ctrl.ttcontent"></cooltip> ',
	  		'ipsum dolor sit amet, has in dico ',
	  		'<cooltip cooltip-type="classic" cooltip-item="\'lobortis\'" cooltip-effect="2" cooltip-content="Ctrl.ttcontent"></cooltip> ',
	  		'expetendis, per nibh vero mutat no. Qui no copiosae ',
	  		'<cooltip cooltip-type="classic" cooltip-item="\'deserunt\'" cooltip-effect="3" cooltip-content="Ctrl.ttcontent"></cooltip>',
	  		'. Vix in delenit omittam elaboraret, ut ',
	  		'<cooltip cooltip-type="classic" cooltip-item="\'idque\'" cooltip-effect="4" cooltip-content="Ctrl.ttcontent"></cooltip> ',
	  		'atqui deleniti qui. Quo nisl fuisset id. Ut veniam mollis vix. Veniam iudicabit no pri, ne eam sale cetero ',
	  		'<cooltip cooltip-type="classic" cooltip-item="\'reprehendunt\'" cooltip-effect="5" cooltip-content="Ctrl.ttcontent"></cooltip>.',
	  	'</p>'
	  ].join('\n'));

    $templateCache.put('partials/box.html',[
      '<p>',
        '<cooltip cooltip-type="box" cooltip-item="\'Lorem\'" cooltip-effect="1" cooltip-content="Ctrl.ttcontent"></cooltip> ',
        'ipsum dolor sit amet, has in dico ',
        '<cooltip cooltip-type="box" cooltip-item="\'lobortis\'" cooltip-effect="2" cooltip-content="Ctrl.ttcontent"></cooltip> ',
        'expetendis, per nibh vero mutat no. Qui no copiosae ',
        '<cooltip cooltip-type="box" cooltip-item="\'deserunt\'" cooltip-effect="3" cooltip-content="Ctrl.ttcontent"></cooltip>',
        '. Vix in delenit omittam elaboraret, ut ',
        '<cooltip cooltip-type="box" cooltip-item="\'idque\'" cooltip-effect="4" cooltip-content="Ctrl.ttcontent"></cooltip> ',
        'atqui deleniti qui. Quo nisl fuisset id. Ut veniam mollis vix. Veniam iudicabit no pri, ne eam sale cetero ',
        '<cooltip cooltip-type="box" cooltip-item="\'reprehendunt\'" cooltip-effect="5" cooltip-content="Ctrl.ttcontent"></cooltip>.',
      '</p>'
    ].join('\n'));

	  $templateCache.put('partials/round.html',[
	  	'<ul>',
	  		'<li>',
	  			'<cooltip cooltip-type="round" ng-repeat="item in Ctrl.list" cooltip-item="item.name" cooltip-effect="item.effect" cooltip-content="item.content"></cooltip>',
	  		'</li>',
	  	'</ul>'
	  ].join('\n'));

	}]);

})();
