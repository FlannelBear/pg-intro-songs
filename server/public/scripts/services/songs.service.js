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
   sv.addSong = function(song){
      return $http({
         method: 'POST',
         url: '/song',
         data: song
      }).then(function(response){
         console.log('POST for /song returned: ', response);
      }).catch(function(error){
         console.log('Error handling POST for /song:, ', error);
      });
   };
   sv.deleteSong = function(id){
      return $http({
         method: 'DELETE',
         url: `/song/${id}`
      }).then(function(response){
         console.log('Response from server for DELETE /song: ', response);
      }).catch(function(error){
         console.log('Error handling DELETE for /song: ', error);
      });
   }
}]);