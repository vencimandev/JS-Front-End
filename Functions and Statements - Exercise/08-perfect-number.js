function isPerfectNumber(num) {
    if (num <= 1) {
        console.log("It's not so perfect.");
        return;
    }

    let sumOfDivisors = 0;

    // Намираме делителите и ги сумираме
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }

    // Проверяваме дали сумата на делителите е равна на числото
    if (sumOfDivisors === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

