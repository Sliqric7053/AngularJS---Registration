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

  $scope.login = function() {
    $scope.message = 'Welcome ' + $scope.user.email;
  }; // login

  $scope.register = function() {
    email    = $scope.user.email;
    password = $scope.user.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(regUser) {
      $scope.message = 'Hi ' + $scope.user.firstname.charAt(0).toUpperCase() + $scope.user.firstname.slice(1) + ' ' + $scope.user.lastname.charAt(0).toUpperCase() + $scope.user.lastname.slice(1) + ', thanks for registering!';
     }).catch(function(error) {
   // Handle Errors here.
   // var errorCode = error.code;
      $scope.message = error.message;
    });
  }; // register
}]); // factory
