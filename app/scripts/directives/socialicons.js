'use strict';

/**
 * @ngdoc directive
 * @name 3aConsultantsApp.directive:socialIcons
 * @description
 * # socialIcons
 */
angular.module('3aConsultantsApp')
  .directive('socialIcons', function () {
    return {
      templateUrl: 'views/directives/socialIcons.html',
      restrict: 'E'
    };
  });
