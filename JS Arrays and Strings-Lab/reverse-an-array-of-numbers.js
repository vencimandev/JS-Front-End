function reverseArray(n, arr) {
    let newArray = [];

    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]);
    }

    newArray.reverse();

    console.log(newArray.join(' '));
}
