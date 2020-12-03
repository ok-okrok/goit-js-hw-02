const findLongestWord = function (string) {
    const words = string.split(' ');
    let len = ''; 

    for (let word of words) { 
        if (len.length < word.length) {
            len = word;
        }
    }
    return len;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'


