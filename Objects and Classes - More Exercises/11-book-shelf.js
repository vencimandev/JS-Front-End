function manageBooks(input) {
    let shelves = {};

    input.forEach(line => {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!shelves[id]) {
                shelves[id] = { genre, books: [] };
            }
        } else if (line.includes(':')) {
            let [bookInfo, genre] = line.split(', ');
            let [title, author] = bookInfo.split(': ');
            for (let id in shelves) {
                if (shelves[id].genre === genre) {
                    shelves[id].books.push({ title, author });
                    break;
                }
            }
        }
    });

    // Convert shelves object to an array for sorting
    let shelvesArray = Object.entries(shelves).sort((a, b) => b[1].books.length - a[1].books.length);

    // Print the results
    shelvesArray.forEach(([id, shelf]) => {
        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);
        shelf.books.sort((a, b) => a.title.localeCompare(b.title)).forEach(book => {
            console.log(`--> ${book.title}: ${book.author}`);
        });
    });
}
