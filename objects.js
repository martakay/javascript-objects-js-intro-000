var playlist = {
  "artist": "song"
};

function updatePlaylist({}, artist, song) {
  return Object.assign({}, artist: song);
}
