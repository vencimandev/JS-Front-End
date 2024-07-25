function wordsTracker(input) {
    const wordsToTrack = input[0].split(' ');
    const wordCounts = {};

    wordsToTrack.forEach(word => {
        wordCounts[word] = 0;
    });

    for (let i = 1; i < input.length; i++) {
        const word = input[i];
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        }
    }

    const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}

