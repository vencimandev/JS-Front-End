function processCrystals(input) {
    const targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let thickness = input[i];
        console.log(`Processing chunk ${thickness} microns`);

        thickness = performOperation(thickness, 'Cut', targetThickness, (t) => t / 4);
        thickness = performOperation(thickness, 'Lap', targetThickness, (t) => t * 0.8);
        thickness = performOperation(thickness, 'Grind', targetThickness, (t) => t - 20);
        thickness = performOperation(thickness, 'Etch', targetThickness, (t) => t - 2);

        if (thickness + 1 === targetThickness) {
            thickness++;
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }

    function performOperation(thickness, operationName, targetThickness, operation) {
        let count = 0;

        while (operation(thickness) >= (operationName === 'Etch' ? targetThickness - 1 : targetThickness)) {
            thickness = operation(thickness);
            count++;
        }

        if (count > 0) {
            console.log(`${operationName} x${count}`);
            thickness = Math.floor(thickness);
            console.log('Transporting and washing');
        }

        return thickness;
    }
}

