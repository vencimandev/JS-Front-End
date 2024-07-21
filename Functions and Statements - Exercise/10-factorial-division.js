function factorialDivision(num1, num2) {
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }
        let result = 1;
        for (let i = num; i > 1; i--) {
            result *= i;
        }
        return result;
    }

    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);
    let divisionResult = factorial1 / factorial2;
    console.log(divisionResult.toFixed(2));
}

