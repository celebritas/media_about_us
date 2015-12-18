
var user = angular.module('user', ['ngRoute']);
user.config(function ($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'http://mediaaboutus.aidalegrand.com/files/user.html'})
	.otherwise({redirectTo: '/'})
});
user.controller('UserController', function($scope){

})