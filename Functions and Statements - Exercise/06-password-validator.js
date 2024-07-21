function passwordValidator(password) {
    let isValid = true;
    let errors = [];

    // Проверка за дължина
    if (password.length < 6 || password.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
        isValid = false;
    }

    // Проверка за символи
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        errors.push("Password must consist only of letters and digits");
        isValid = false;
    }

    // Проверка за цифри
    let digitCount = (password.match(/\d/g) || []).length;
    if (digitCount < 2) {
        errors.push("Password must have at least 2 digits");
        isValid = false;
    }

    // Извеждане на резултата
    if (isValid) {
        console.log("Password is valid");
    } else {
        errors.forEach(error => console.log(error));
    }
}

