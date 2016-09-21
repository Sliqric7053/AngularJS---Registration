

// [dependant modules go here] --> Occasionally, you'll create a module that depends on the functionality of another module.
var myApp = angular.module('myApp',
['ngRoute', 'firebase']) // To use email/password login --> add 'firebase' dependency 
.constant('FIREBASE_URL', 'https://angular-registration-ab52e.firebaseio.com'); //database URL received from reg Firebase

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController'
    }).
    otherwise({
      redirectTo: '/login'
    })
}]);
