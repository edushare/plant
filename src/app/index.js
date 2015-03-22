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
.directive('owlCarousel', function($timeout) {
  return {
    restrict: 'A',
    scope: {
      owlOptions: '='
    },
    link: function(scope, element, attrs) {
      scope.$watch(attrs.owlOptions, function(value) {
        $timeout(function() {
          element.owlCarousel(scope.owlOptions);
        });
      });
    },
    controller: function($scope, $element, $attrs) {
      if ($attrs.owlCarousel) {
        $scope.$parent[$attrs.owlCarousel] = this;

        this.prev = function() {
          $element.trigger('owl.prev');
        };

        this.next = function() {
          $element.trigger('owl.next');
        };
      }
    }
  };
});
