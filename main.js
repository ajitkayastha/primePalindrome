var longestPalindrome = function (string) {

    var length = string.length;
    var result = "";

    var centeredPalindrome = function (left, right) {
        while (left >= 0 && right < length && string[left] === string[right]) {
            //expand in each direction.
            left--;
            right++;
        }

        return string.slice(left + 1, right);
    };

    for (var i = 0; i < length - 1; i++) {
        var oddPal = centeredPalindrome(i, i + 1);

        var evenPal = centeredPalindrome(i, i);


        if (oddPal.length > result.length)
            result = oddPal;
        if (evenPal.length > result.length)
            result = evenPal;
    }

    var isPrime = function (num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) { 
                return false; 
            }
        return num > 1;
    }

    if (isPrime(result.length)) {
        return "YES";
    } else {
        return "NO";
    }
};

console.log(
    longestPalindrome("mom")
);
