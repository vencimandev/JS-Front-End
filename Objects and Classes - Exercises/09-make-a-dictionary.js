function makeDictionary(input) {
    let dictionary = {};

    input.forEach(item => {
        let obj = JSON.parse(item);
        let term = Object.keys(obj)[0];
        let definition = obj[term];
        dictionary[term] = definition;
    });

    let sortedTerms = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    sortedTerms.forEach(term => {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    });
}

