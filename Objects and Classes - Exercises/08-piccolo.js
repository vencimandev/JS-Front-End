function piccolo(input) {
    const parkingLot = new Set();

    input.forEach(entry => {
        const [direction, carNumber] = entry.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    });

    const sortedCarNumbers = Array.from(parkingLot).sort();

    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedCarNumbers.forEach(carNumber => console.log(carNumber));
    }
}

