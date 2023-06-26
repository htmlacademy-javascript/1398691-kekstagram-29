const checkString = (string, maxLength) => (string.length <= maxLength);

checkString('Проверяемая строка', 20);
// console.log(checkString('Проверяемая строка', 20));
// console.log(checkString('Проверяемая строка', 18));
// console.log(checkString('Проверяемая строка', 10));

const isPolidrome = (str) => (str.toLowerCase().replaceAll(' ', '') === str.replaceAll(' ', '').toLowerCase().split('').reverse().join(''));

isPolidrome('Кошка');
// console.log(isPolidrome('Кошка'));
// console.log(isPolidrome('ШаЛаш'));
// console.log(isPolidrome('Лёша на полке клопа нашёл '));

