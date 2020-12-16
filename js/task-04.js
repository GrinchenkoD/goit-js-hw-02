'use strict';


// если до 40 символов вернет исходную строку
// если больше 40 символов вернет укороченную (обрезать по 40й символ и добавить '...')


const formatString = function(string) {
    let symbols = string.split('');
    let optimizedSymbols;
    let optimizedString;
    console.log(string.legnth);
    if (symbols.legnth > 40) {
         symbols.splice(0, 40);
        console.log(symbols);
    }

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка