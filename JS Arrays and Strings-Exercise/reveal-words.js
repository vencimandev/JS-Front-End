function revealWords(words, text) {
    let wordsArray = words.split(', ');

    for (let word of wordsArray) {
        let placeholder = '*'.repeat(word.length);
        text = text.replace(placeholder, word);
    }

    console.log(text);
}

