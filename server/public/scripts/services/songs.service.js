console.log('Before app declared in service');

console.log('After app declared in service');
songsApp.service('songsService', ['$http', function($http){
   let sv = this;
   sv.songs = [];
   console.log('In songsService');
   sv.getAllSongs = function(){
      console.log('In songsService getAllSongs');
      return $http({
         method: 'GET',
         url: '/song'
      }).then(function(response){
         sv.songs = response.data;
         console.log('Response from GET for /song: ', response.data);
      }).catch(function(error){
         console.log('Error from GET for /song: ', error);
      });
   };
}]);