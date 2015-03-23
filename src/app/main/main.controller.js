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

    $scope.gotoPrev = function(owl) {
      owl.prev();
    };

    $scope.gotoNext = function(owl) {
      owl.next();
    };

    $scope.flowersRoot = "assets/picture/flower/";
    $scope.flowers = [
      "1.jpg", "10、虞美人.jpg", "1、鸡冠花.jpg", "2.jpg", "3.jpg", "4.jpg", "5一串红.jpg", "6万寿菊.jpg", "7、夏堇.jpg", "8、孔雀草.jpg"
    ];

    $scope.qiaomuRoot = "assets/picture/乔木/";
    $scope.qiaomus = [
      {name: "油松", image: "1、油松.jpg"},
      {name: "红皮云杉", image: "2、红皮云杉.jpg"},
      {name: "银杏", image: "3、银杏.jpg"},
      {name: "旱柳", image: "4、旱柳.jpg"},
      {name: "蒙古栎", image: "5、蒙古栎.jpg"},
      {name: "五角枫", image: "6、五角枫.jpg"},
      {name: "稠李", image: "7、稠李.jpg"}
    ];
  });
