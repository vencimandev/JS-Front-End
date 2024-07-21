function checkPalindromes(numbers) {
    function isPalindrome(number) {
        const str = number.toString();
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    for (let number of numbers) {
        console.log(isPalindrome(number));
    }
}

