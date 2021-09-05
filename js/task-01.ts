'use strict';

// при помощи цикла for для каждого элемента
//  выводить в консоль сообщение в формате[номер элемента]-[значение элемента]
// нумерация должна начинаться с 1 (для[0] будет 1  и т.д.)

const logItems = function (array: string[] | number[]): void {
	for (let i = 0; i < array.length; i++) {
		console.log(`${i + 1}-${array[i]}`);
	}
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
