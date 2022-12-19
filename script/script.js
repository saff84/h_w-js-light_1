// document.write('Hello, world!');
// console.log('Hello, developers!');

let number = Math.floor(Math.random() * 1000);
console.log(number);
let num2;

while (number != num2) {

    num2 = prompt("Введите целое число или слово 'выход' для выхода")
    if (num2 == "выход") {
        break;
    }

    else if (isNaN(num2)) {
        alert(`Нужно ввести целое число ${num2}`);
        console.log(`Нужно ввести целое число ${num2}`);

    }

    else if (number == num2) {
        alert(`"Поздравляю вы угадали!!!"`);
        console.log(`"Поздравляю вы угадали!!!"`);

    }

    else if (number > num2) {
        alert(`Загаданное число больше ${num2}`);
        console.log(`Загаданное число больше ${num2}`);

    }
    else {
        alert(`Загадонное число меньше ${num2}`);
        console.log(`Загадонное число меньше ${num2}`);

    }
}