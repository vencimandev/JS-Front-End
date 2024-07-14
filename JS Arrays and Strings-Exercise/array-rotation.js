function arrayRotation(arr, rotations) {
    let rotationCount = rotations % arr.length;

    for (let i = 0; i < rotationCount; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(' '));
}


