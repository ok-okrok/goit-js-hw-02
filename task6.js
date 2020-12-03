let input;
const numbers = [];
let total = 0;

do {
    let input = prompt('Please input a number');
    if (input === null) {
        alert('Canceled by user');
        break
    }

    input = Number(input);
    
    if (Number.isNaN(input)) {
        alert('Please input a number, not a text');
        continue;
    }

    numbers.push(input);

} while (true);

for (let number of numbers) {
    total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
console.log(numbers);