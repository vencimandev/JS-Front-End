function sortingNumbers(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let result = [];

    while (sortedArr.length) {
        if (sortedArr.length) {
            result.push(sortedArr.shift()); 
        }
        if (sortedArr.length) {
            result.push(sortedArr.pop()); 
        }
    }

    return result;
}

