function signCheck(numOne, numTwo, numThree) {
    let negativeCount = 0;

    if (numOne < 0) {
        negativeCount++;
    }
    if (numTwo < 0) {
        negativeCount++;
    }
    if (numThree < 0) {
        negativeCount++;
    }

    if (negativeCount === 1 || negativeCount === 3) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

