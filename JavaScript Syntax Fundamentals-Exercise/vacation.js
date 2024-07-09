function calculateVacationPrice(peopleCount, groupType, dayOfWeek) {
    let pricePerPerson;

    if (groupType === 'Students') {
        switch (dayOfWeek) {
            case 'Friday':
                pricePerPerson = 8.45;
                break;
            case 'Saturday':
                pricePerPerson = 9.80;
                break;
            case 'Sunday':
                pricePerPerson = 10.46;
                break;
        }
    } else if (groupType === 'Business') {
        switch (dayOfWeek) {
            case 'Friday':
                pricePerPerson = 10.90;
                break;
            case 'Saturday':
                pricePerPerson = 15.60;
                break;
            case 'Sunday':
                pricePerPerson = 16.00;
                break;
        }
    } else if (groupType === 'Regular') {
        switch (dayOfWeek) {
            case 'Friday':
                pricePerPerson = 15.00;
                break;
            case 'Saturday':
                pricePerPerson = 20.00;
                break;
            case 'Sunday':
                pricePerPerson = 22.50;
                break;
        }
    }

    let totalPrice = peopleCount * pricePerPerson;

    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && peopleCount >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

