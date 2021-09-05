'use strict';

// принимает параметром произвольную строку
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string: string) {
	let arr: string[] = string.split(' ');
	let longestWord: string = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > longestWord.length) {
			longestWord = arr[i];
		}
	}

	return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
