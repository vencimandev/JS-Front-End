function oddAndEvenSum(number) {
    let numString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let char of numString) {
        let digit = parseInt(char);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

