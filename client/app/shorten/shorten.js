angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.link = {};

  $scope.addLink = function () {
    Links.addLink($scope.link)
      .then(function () {
        $location.path('/');
      })
      .catch(function (err) {
        console.log(err);
      });
  };

});
