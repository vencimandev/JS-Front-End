function pascalCaseSplitter(input) {
    let result = [];
    let currentWord = input[0];

    for (let i = 1; i < input.length; i++) {
        let char = input[i];
        if (char === char.toUpperCase()) {
            result.push(currentWord);
            currentWord = char;
        } else {
            currentWord += char;
        }
    }
    result.push(currentWord); // Don't forget to push the last word

    console.log(result.join(', '));
}
