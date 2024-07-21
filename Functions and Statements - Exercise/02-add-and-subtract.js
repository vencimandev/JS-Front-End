function addAndSubtract(numOne, numTwo, numThree) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    const sumResult = sum(numOne, numTwo);
    const finalResult = subtract(sumResult, numThree);
    console.log(finalResult);
}

