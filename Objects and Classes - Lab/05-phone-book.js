function phoneBook(input) {
    const phoneBook = {};

    input.forEach(entry => {
        const [name, phone] = entry.split(' ');
        phoneBook[name] = phone;
    });

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

