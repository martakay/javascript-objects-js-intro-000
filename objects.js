var playlist = {
  "taylor swift": "shake it off"
};

function updatePlaylist(playlist, artist, song) {
  return playlist[artist] = song;
}

function removeFromPlaylist(playlist, artist) {
  console.log("uuHHMMFMFAJSFNHIOUHFOIUASF", playlist);
  console.log("~~~~~++++++~~~~~~+++++", playlist[artist]);
  delete playlist[artist];
  return playlist;
}
