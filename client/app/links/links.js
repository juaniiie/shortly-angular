angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };

  $scope.saveLinks = function () {

  };
  //fetch links
  $scope.getLinks = function () {
    //references all links in linkController.js
    //what is Link.getLinks() evaluating to and why
    Links.getLinks()
      .then(function (links) {
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //nav to links
  $scope.getLinks();
});