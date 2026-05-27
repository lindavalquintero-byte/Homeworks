class MaxHeap {
  constructor() {
    this.songs = [];
  }

  insert(song, plays) {
    this.songs.push({
      song,
      plays,
    });
  }

  getTopSongs() {
    return this.songs.sort(
      (a, b) => b.plays - a.plays
    );
  }
}

export default MaxHeap;