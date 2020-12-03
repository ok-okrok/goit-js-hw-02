const checkForSpam = function (message) {
    message = message.toLowerCase();
    console.log(message);
    if (message.includes('spam') || message.includes('sale')) {
        message = true;
    } else {
        message = false;
    }

    return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true