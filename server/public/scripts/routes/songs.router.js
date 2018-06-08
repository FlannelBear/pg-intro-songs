const songsApp = angular.module('songsApp',['ngRoute']);

songsApp.config(function($routeProvider){
   $routeProvider.when('/', {
      templateUrl: 'views/home.html'
   }).when('/manifest',{
      templateUrl:'views/manifest.html',
   }).when('/addNew',{
      templateUrl:'views/addNew.html'
   }).otherwise({
      template:'<h2>404</h2>'
   });
});