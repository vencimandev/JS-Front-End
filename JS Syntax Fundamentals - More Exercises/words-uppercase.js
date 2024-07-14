function wordsUppercase(input) {
    const words = input.match(/\w+/g);  
    const upperCaseWords = words.map(word => word.toUpperCase());  
    console.log(upperCaseWords.join(', '));  
}


