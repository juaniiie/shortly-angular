angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
    // url: '',
    // base_url: '',
    // code: '',
    // title: '',
    // visits: ''
  };
  // $scope.Links = [];
  //save links

  $scope.saveLinks = function () {
    


  };
  //fetch links
  $scope.getLinks = function () {
   //references all links in linkController.js
   console.log('============getlinks CAlled=======');
    Links.getLinks($scope.data)
    .then(function () {
      $location.path('/links');
    })
    .catch(function (error) {
        console.error(error);
      });
  };
  //nav to links
});
