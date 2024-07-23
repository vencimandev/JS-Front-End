function songs(input) {
    let numberOfSongs = input.shift();
    let songs = [];
    let filterType = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        songs.push({ type, name, time });
    }

    if (filterType === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs
            .filter(song => song.type === filterType)
            .forEach(song => console.log(song.name));
    }
}

