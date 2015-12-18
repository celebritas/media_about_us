
var user = angular.module('user', ['ngRoute']);
user.config(function ($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'http://localhost:8000/files/user.html'})
	.otherwise({redirectTo: '/'})
});
user.controller('UserController', function($scope){

})