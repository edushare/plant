'use strict';

angular.module('plantfinder', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
.directive('owlCarousel', function() {
  return {
    restrict: 'A',
    scope: {
      owlOptions: '='
    },
    link: function(scope, element, attrs) {
      $(element).owlCarousel(scope.owlOptions);
    }
  };
});
