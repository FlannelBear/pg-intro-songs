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
   vm.vote = function(row, vote){
      console.log(row.song, vote);
      songsService.updateSong(row.song, vote).then(function(){
         vm.getAllSongs();
      });
   };
   vm.deleteSong = function(row){
      songsService.deleteSong(row.song.id).then(function(){
         vm.getAllSongs();
      });
   };
});