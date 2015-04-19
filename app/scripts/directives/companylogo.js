'use strict';

/**
 * @ngdoc directive
 * @name 3aConsultantsApp.directive:companyLogo
 * @description
 * # companyLogo
 */
angular.module('3aConsultantsApp')
  .directive('companyLogo', function () {
    return {
      templateUrl: 'views/directives/companyLogo.html',
      restrict: 'E'
    };
  });
