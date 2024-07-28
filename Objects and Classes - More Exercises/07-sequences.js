function sequences(input) {
    let uniqueArrays = new Map();

    input.forEach(jsonString => {
        let array = JSON.parse(jsonString).map(Number);
        array.sort((a, b) => b - a); 
        let key = JSON.stringify(array);
        uniqueArrays.set(key, array);
    });

    let sortedArrays = Array.from(uniqueArrays.values());
    sortedArrays.sort((a, b) => a.length - b.length);

    sortedArrays.forEach(arr => {
        console.log(`[${arr.join(', ')}]`);
    });
}

