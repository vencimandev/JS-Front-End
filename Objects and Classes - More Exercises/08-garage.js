function storeCarsInGarages(input) {
    let garages = new Map();

    input.forEach(entry => {
        let [garageNumber, carInfo] = entry.split(' - ');
        if (!garages.has(garageNumber)) {
            garages.set(garageNumber, []);
        }
        garages.get(garageNumber).push(carInfo);
    });

    for (let [garageNumber, cars] of garages) {
        console.log(`Garage № ${garageNumber}`);
        cars.forEach(car => {
            let carDetails = car.split(', ').map(detail => detail.replace(': ', ' - ')).join(', ');
            console.log(`--- ${carDetails}`);
        });
    }
}

