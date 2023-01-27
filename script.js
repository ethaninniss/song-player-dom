class Song {
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }
}

class SongQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

// https://www.youtube.com/watch?v=6nhVHlIl6Ko&ab_channel=ESPNFC

document.getElementById("song-search").onclick = function() {
    const songName = document.getElementById("song-name").value;
    const songFile = document.getElementById("song-file").value;
    console.log(songName)
    console.log(songFile)
    console.log(typeof songFile)
    new Audio(songFile).play();
    
};