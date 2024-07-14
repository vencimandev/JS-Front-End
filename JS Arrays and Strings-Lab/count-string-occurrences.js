function countStringOccurrences(text, word) {
    const wordsArray = text.split(' ');
    let count = 0;

    for (let w of wordsArray) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);
}

