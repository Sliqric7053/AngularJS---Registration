myApp.controller('RegistrationController', ['$scope', function($scope) { ////$scope is a variable that the app is going to use to pass info along from this controller, into the view or the template.
  $scope.login = function() {
    $scope.message = 'Welcome ' + $scope.user.email;
  }

  $scope.register = function() {
    $scope.message = 'Welcome ' + $scope.user.firstname + ' ' + $scope.user.lastname;
  }
}]);
