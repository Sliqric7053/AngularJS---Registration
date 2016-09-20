var myApp = angular.module('myApp', ['ngRoute']); // [dependant modules go here] --> Occasionally, you'll create a module that depends on the functionality of another module.

// myApp.controller('appController', ['$scope', function($scope) { //$scope is a variable that the app is going to use to pass info along from this controller, into the view or the template.
//   $scope.message = 'Welcome to my App';
// }]);

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
