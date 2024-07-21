function numberModification(number) {
    let numStr = number.toString();
    
    function getAverage(numStr) {
        let sum = 0;
        for (let char of numStr) {
            sum += Number(char);
        }
        return sum / numStr.length;
    }

    while (getAverage(numStr) <= 5) {
        numStr += '9';
    }

    console.log(numStr);
}

