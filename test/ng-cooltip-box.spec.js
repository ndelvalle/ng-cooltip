
describe('ng-cooltip box directive spec', function() {

  var element;
  var scope;
  var compile;
  this.scope = scope;

  beforeEach(module('ng-cooltip'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    scope   = $rootScope.$new();

    scope.content = 'Vel ut solum erant dicit, eum te aperiam efficiendi, et eos alia eruditi persecuti. Ius ex omnis voluptatum';
    scope.effect  = 1;
    directiveElem = getCompiledElement();
  }));


  it('should have  6 span elements', function () {
    var element = directiveElem.find('span');
    expect(element.length).toEqual(6);
  });


  // The directive must have the above elements
  //--------------------------------------------------------------//

  var mustHaveElements = [
    { selector: '#', name: 'ng-cooltip' },
    { selector: '#', name: 'cooltip-box' },
    { selector: '.', name: 'tooltip-effect-1' },
    { selector: '.', name: 'tooltip-item' },
    { selector: '.', name: 'tooltip-content' },
    { selector: '.', name: 'tooltip-text' },
  ];

  function mustHaveElementTask(taskName, el) {
    it(taskName, function () {
      var element = directiveElem[0].querySelector(el.selector + el.name);
      expect(element).toBeDefined();
      expect(element).not.toBe(null);
    });
  }

  mustHaveElements.forEach(function (el) {
    var selectorName = el.selector === '#' ? 'id' : 'class';
    var taskName = 'should have an element with '+ selectorName +': \''+ el.name +'\'';

    mustHaveElementTask(taskName, el);
  });


  // The directive should work with the above effects
  //--------------------------------------------------------------//

  var availableEffects = ['1', '2', '3', '4', '5'];

  function availableEffectsTask(taskName, effect) {
    it(taskName, function () {
      // compile directive with new scope.effect value
      scope.effect = effect;
      directiveElem = getCompiledElement();

      var element = directiveElem[0].querySelector('.tooltip-effect-' + effect);
      expect(element).toBeDefined();
      expect(element).not.toBe(null);
    });
  }

  availableEffects.forEach(function (effect) {
    var taskName = 'should displayed class with effect ' + effect;
    availableEffectsTask(taskName, effect);
  });


  // The directive should work with the above types of content
  //--------------------------------------------------------------//

  var staticContent = 'Vel ut solum erant dicit, eum te aperiam efficiendi';
  var availableElements = [{
    content: staticContent,
    type: 'String'
  }, {
    content: '<span>'+ staticContent +'</span>',
    type: 'html'
  }];

  function testAvailableElements(taskName, content) {
    it(taskName, function () {
      scope.content = content;
      directiveElem = getCompiledElement();

      var element = directiveElem[0].querySelector('.tooltip-text').innerHTML;
      expect(element).toBeDefined();
      expect(element).not.toBe(null);
    });
  }

  availableElements.forEach(function (el) {
    var taskName = 'should allow ' + el.type + ' content type';
    testAvailableElements(taskName, el.content);
  });


  //--------------------------------------------------------------//

  function getCompiledElement() {
    element = angular.element('<cooltip cooltip-type="box" cooltip-item="\'Lorem\'" cooltip-effect="effect" cooltip-content="content"></cooltip>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

});
