function movies(input) {
    let movies = [];

    input.forEach(line => {
        if (line.startsWith('addMovie ')) {
            let movieName = line.substring(9);
            movies.push({ name: movieName });
        } else if (line.includes(' directedBy ')) {
            let [movieName, director] = line.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes(' onDate ')) {
            let [movieName, date] = line.split(' onDate ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    });

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

