function calculateCircleArea(input) {
    let result;
    
    if (typeof input === 'number') {
        let area = Math.PI * Math.pow(input, 2);
        result = area.toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${typeof input}.`;
    }

    console.log(result);
}

