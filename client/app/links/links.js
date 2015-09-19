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

        $scope.data.links = [{
            visits: 1000,
            link: 'www.word.com',
            title: 'Best site ever',
            code: 'xjyz8',
            base_url: 'http://localhost:3000',
            url: 'http://www.word.com'
        }];
        console.log($scope.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //nav to links
  $scope.getLinks();
});