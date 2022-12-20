// document.write('Hello, world!');
// console.log('Hello, developers!');

const number = +Math.floor(Math.random() * 1000);
console.log(number);
let numberUser;

while (number !== numberUser) {

    numberUser = prompt("Введите целое число или слово 'выход' для выхода")
    numberUser = numberUser.toLowerCase()

    if (numberUser === "выход") {
        break;
    }

    else if (isNaN(numberUser) || numberUser < 0 || numberUser > 1000) {
        alert(`Нужно ввести целое положительное число от 0 до 1000 ваше чило ${numberUser}`);
        console.log(`Нужно ввести целое положительное число от 0 до 1000 ваше чило ${numberUser}`);

    }

    else if (number == numberUser) {
        alert(`Поздравляю вы угадали!!!`);
        console.log(`Поздравляю вы угадали!!!`);

    }

    else if (number > numberUser) {
        alert(`Загаданное число больше ${numberUser}`);
        console.log(`Загаданное число больше ${numberUser}`);

    }
    else {
        alert(`Загадонное число меньше ${numberUser}`);
        console.log(`Загадонное число меньше ${numberUser}`);

    }
}