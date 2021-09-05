'use strict';
//     Слова в строке могут быть в произвольном регистре.
// Функция проверяет ее на содержание слов spam и sale
// Если нашли зарещенное слово то функция возвращает true,
//     если запрещенных слов нет функция возвращает false

const checkForSpam = function (message: string): boolean {
	message = message.toLowerCase();

	if (message.includes('spam') || message.includes('sale')) {
		return true;
	} else {
		return false;
	}
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
