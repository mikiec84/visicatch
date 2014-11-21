'use strict';

/* Directives */

var visicatchDirectives = angular.module( 'visicatchDirectives', [] );

visicatchDirectives.directive( 'ltiTotals', function() {
  return {
    restrict: 'E',
    scope: '=',
    template: '<p><b>Total Annotations:</b> {{totals.annotations}}<p>'
  };
} );
