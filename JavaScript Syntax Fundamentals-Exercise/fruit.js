function calculateFruitCost(fruit, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let totalCost = weightInKilograms * pricePerKilogram;
    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}
