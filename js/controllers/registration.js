myApp.controller('RegistrationController',
  ['$scope', '$firebaseAuth', 'FIREBASE_URL', //$scope is a variable that the app is going to use to pass info along from this controller, into the view or the template.
  function($scope, $firebaseAuth, FIREBASE_URL) {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQQXbU1AkD9GjcwvMgh2BVuEn3OZPMFW4",
    authDomain: "angular-registration-ab52e.firebaseapp.com",
    databaseURL: "https://angular-registration-ab52e.firebaseio.com",
    storageBucket: "angular-registration-ab52e.appspot.com",
    messagingSenderId: "368084753004"
  };

  // Initialize SDK
  firebase.initializeApp(config);

  // add Comment
  var rootRef = firebase.database().ref();

  $scope.login = function() {
    $scope.message = 'Welcome ' + $scope.user.email;
  }; // login

  $scope.register = function() {
    rootRef.$createUser({
      email: $scope.user.email,
      password: $scope.user.password
    }).then(function(regUser) { //JS promise
      $scope.message = 'Hi ' + $scope.user.firstname + ' ' + $scope.user.lastname + ', thanks for registering!';
    }).catch(function(error){
      $scope.message = error.message;
    }); // createUser
  } // register
}]); // factory
