songsApp.controller('addNewSongController', function(songsService){

   const vm = this;

   vm.addSong = function(){
      let song = {
         artist: vm.artistIn,
         track: vm.trackIn,
         published: vm.publicationDateIn,
         rank: 1
      }
      songsService.addSong(song).then(function(){
         console.log(song);
      });
   };
});