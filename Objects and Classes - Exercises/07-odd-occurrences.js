function oddOccurrences(input) {
    const words = input.toLowerCase().split(' ');
    const wordCounts = new Map();

    words.forEach(word => {
        if (wordCounts.has(word)) {
            wordCounts.set(word, wordCounts.get(word) + 1);
        } else {
            wordCounts.set(word, 1);
        }
    });

    const result = [];
    wordCounts.forEach((count, word) => {
        if (count % 2 !== 0) {
            result.push(word);
        }
    });

    console.log(result.join(' '));
}
