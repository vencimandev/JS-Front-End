function modernTimesOfHashtag(text) {
    let words = text.split(' ');

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let specialWord = word.substring(1);
            if (/^[a-zA-Z]+$/.test(specialWord)) {
                console.log(specialWord);
            }
        }
    }
}

