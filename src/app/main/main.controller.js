'use strict';

angular.module('plantfinder')
  .controller('MainCtrl', function($scope) {

    $scope.owlOptions = {
      items: 5,
      autoPlay: 4000,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: false
    };

    $scope.owlOptions2 = {
      items: 4,
      autoPlay: 100000,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: false
    };
  });
