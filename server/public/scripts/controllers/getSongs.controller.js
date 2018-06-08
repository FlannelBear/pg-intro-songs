songsApp.controller('songManifestController', function(songsService){
   const vm = this;
   console.log('In songManifestController');
   vm.songs = [];
   vm.getAllSongs = function(){
      console.log('In getAllSongs in controller');
      songsService.getAllSongs().then(function(){
         vm.songs = songsService.songs;
      });
   };
   vm.vote = function(direction){
      console.log('In vote!', direction);
   }
   vm.deleteSong = function(row){
      songsService.deleteSong(row.song.id).then(function(){
         vm.getAllSongs();
      });
   }
});