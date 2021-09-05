type TIsUnique = (a: string[], b: string) => boolean;
type TAddLogin = (a: string[], b: string) => string;

const logins: string[] = [
	'Mango',
	'robotGoogles',
	'Poly',
	'Aj4x1sBozz',
	'qwerty123',
];

const isLoginValid = function (login: string): boolean {
	return 4 <= login.length && login.length <= 16;
};

const isLoginUnique: TIsUnique = function (allLogins, login) {
	return allLogins.includes(login);
};

const addLogin: TAddLogin = function (allLogins, login) {
	if (!isLoginValid(login)) {
		return 'Ошибка! Логин должен быть от 4 до 16 символов';
	} else if (isLoginUnique(allLogins, login)) {
		return 'Такой логин уже используется!';
	} else {
		logins.push(login);
		return 'Логин успешно добавлен!';
	}
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
