angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  // $scope.shortUrl = {};

  $scope.link = {
    url: ''
  };

  $scope.addLink = function () {
    Links.addLink($scope.link);
  };

});
