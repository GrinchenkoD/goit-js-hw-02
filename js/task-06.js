'use strict';
// 1)пользователю предлагается в prompt ввести число
// 2)Ввод сохраняется в переменную input и добавляется в массив чисел numbers
// 3) ввод продолжается до тех пор, пока пользователь не нажмет Cancel.
// 4) После того как пользователь прекратил ввод нажав Cancel:
//     -посчитать сумму всех элементов массива и записать ее в переменную total
//     -в консоль выведи строку 'Общая сумма чисел равна [сумма]'

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  if (input === null) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
} while (input !== null);
