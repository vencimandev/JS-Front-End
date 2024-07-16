function stringSubstring(word, text) {
    let lowerCaseWord = word.toLowerCase();
    let words = text.toLowerCase().split(' ');

    if (words.includes(lowerCaseWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

