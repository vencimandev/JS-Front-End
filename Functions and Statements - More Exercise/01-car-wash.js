function carWash(commands) {
    let cleanliness = 0;

    for (let command of commands) {
        switch (command) {
            case 'soap':
                cleanliness += 10;
                break;
            case 'water':
                cleanliness *= 1.20;
                break;
            case 'vacuum cleaner':
                cleanliness *= 1.25;
                break;
            case 'mud':
                cleanliness *= 0.90;
                break;
        }
    }

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

