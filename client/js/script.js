var mau = angular.module('mau', [
												'ngRoute', 
												'ngMessages'
												]);

mau.config(function ($routeProvider){
	$routeProvider
	// .when('/', {templateUrl: 'partials/dashboard.html'})
	.when('/', {templateUrl: 'partials/register.html'})
	.when('/login', {templateUrl: 'partials/login.html'})
	// .when('/customers', {templateUrl: 'partials/customers.html'})
	// .when('/settings', {templateUrl: '/partials/settings.html'})
	.otherwise({redirectTo: '/'})
});