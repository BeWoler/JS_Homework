// Домашнее задание 3 

var login = prompt('Введите ваш логин');
	message = (login === 'Вася') ? 'Привет' :
	(login === 'Директор') ? 'Здравствуйте' :
	(login === '') ? 'Нет логина' : '' ;

// Домашнее задание 1

var number = prompt('Введите число'),
	plus = prompt('Сколько вы хотите прибавить?'),
	minus = prompt('Сколько вы хотите отнять?'),
	multiply = prompt('Сколько вы хотите умножить?'),
	divide = prompt('Сколько вы хотите поделить?');
alert('Формула: (' + number + ' + ' + plus + ' - ' + minus + ') * '
	 + multiply + ' / ' + divide +'\nРезультат ' + (((+number)+(+plus)-Number(minus))*Number(multiply)/Number(divide)));


// Домашнее задание 2 

var yourLogin = prompt('Введите ваш логин');
if(yourLogin == 'Админ') {
	var password = prompt('Введите ваш пароль');
	if(password == 'Чёрный властелин') {
		alert('Добро пожаловать');
	}
	else if(password == null) {
		alert('Вход отменён');
	}
	else {
		alert('Пароль неверен');
	}
}
else if(yourLogin == null) {
	alert('Вход отменён');
}
else {
	alert('Я вас не знаю');
}