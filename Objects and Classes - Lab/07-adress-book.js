function addressBook(input) {
    const book = {};

    input.forEach(entry => {
        const [name, address] = entry.split(':');
        book[name] = address;
    });

    const sortedNames = Object.keys(book).sort();

    sortedNames.forEach(name => {
        console.log(`${name} -> ${book[name]}`);
    });
}

