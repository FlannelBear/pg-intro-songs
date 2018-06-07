console.log('js');

const app = angular.module('pgIntroApp', []);

app.controller('TestController', ['$http', function($http){
   const vm = this;

   vm.test = "Testing Angular!";
}]);