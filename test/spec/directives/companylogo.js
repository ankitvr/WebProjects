'use strict';

describe('Directive: companyLogo', function () {

  // load the directive's module
  beforeEach(module('3aConsultantsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<company-logo></company-logo>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('');
  }));
});
