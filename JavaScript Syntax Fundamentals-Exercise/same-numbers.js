function checkSameNumbers(number) {
    const numStr = number.toString();
    const firstDigit = numStr[0];
    let allSame = true;
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== firstDigit) {
            allSame = false;
        }
        sum += parseInt(numStr[i]);
    }

    console.log(allSame);
    console.log(sum);
}
