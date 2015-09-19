angular.module('shortly.services', [])

.factory('Links', function($http) {
  // Your code here
  //ROBERT: call functions from links controller for GET/POST requests such as
  //save links

  var saveLinks = function(link) {
    return $http({
      method: 'POST',
      url: '/', //May need api here part of path
      data: link

    })

  };
  //fetch links
  //nav to link
  var getLinks = function(link) {
    return $http({
        method: 'GET',
        url: '/api/links', //May need api here part of path
        data: link

      })
      .then(function(resp) {
        console.log('============resp.data==========', ∏∏∏∏∏∏resp.data);
        return resp.data.links;
      });
  };
  return {
    getLinks: getLinks,
    saveLinks: saveLinks
  };
})

.factory('Auth', function($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function(user) {
    return $http({
        method: 'POST',
        url: '/api/users/signin',
        data: user
      })
      .then(function(resp) {
        return resp.data.token;
      });
  };

  var signup = function(user) {
    return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
      })
      .then(function(resp) {
        return resp.data.token;
      });
  };

  var isAuth = function() {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function() {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});