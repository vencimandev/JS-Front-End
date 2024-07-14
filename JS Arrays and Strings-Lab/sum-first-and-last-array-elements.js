function sumFirstAndLast(arr) {
    if (arr.length === 0) {
        console.log('The array is empty.');
        return;
    }

    let first = arr[0];
    let last = arr[arr.length - 1];
    let sum = first + last;

    console.log(sum);
}


