(function (angular) {
	angular.module('myApp', ['ngRoute'])
		.config(function ($routeProvider) {
		
					/**
					 *  Defines our app's routes.
					 */
		
					$routeProvider
						.when('/', {
							templateUrl: './app/main.html',
							controller: 'mainController'
						})
						.otherwise({
							redirectTo: '/'
						});
		})
	
		// controller logic here.
		.controller('mainController', ['$scope', '$http','$log','$filter','$q', function($scope,$http,$log,$filter,$q) {
				
		}])

})(window.angular);

