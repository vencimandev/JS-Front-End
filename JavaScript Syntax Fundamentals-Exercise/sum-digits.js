function sumOfDigits(number) {
    let sum = 0;
    let numStr = number.toString();

    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    console.log(sum);
}


