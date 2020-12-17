const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  return 4 <= login.length && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (!isLoginUnique) {
    return 'Такой логин уже используется!';
  } else {
    logins.push(login);
    return 'Логин успешно добавлен!';
  }
};
// console.log('isLoginValid', isLoginValid((logins, 'robotGoogles')));
// console.log('isLoginUnique', isLoginUnique((logins, 'robotGoogles')));
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
