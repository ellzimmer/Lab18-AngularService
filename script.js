var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){
  
    $routeProvider.when('/input',{
      	controller: 'controlInput',
   		templateUrl:'input.html',
	})

    .when('/display',{
      	controller: 'controlDisplay',
 	    templateUrl:'display.html',
    })

    .otherwise ({redirectTo:'/input'});
});