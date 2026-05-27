class Graph {
  constructor() {
    this.list = {};
  }

  addSong(song) {
    if (!this.list[song]) {
      this.list[song] = [];
    }
  }

  connectSongs(song1, song2) {
    this.list[song1].push(song2);
    this.list[song2].push(song1);
  }

  getRecommendations(song) {
    return this.list[song] || [];
  }
}

export default Graph;