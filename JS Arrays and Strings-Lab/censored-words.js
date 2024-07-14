function censorWords(text, word) {
    const censoredWord = '*'.repeat(word.length);
    const censoredText = text.split(word).join(censoredWord);
    console.log(censoredText);
}


