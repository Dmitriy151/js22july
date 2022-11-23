let user = {
   firstName: 'Dmitriy',
   age: 30,
   isAdmin: true,
   email: 'nova151kra@gmail.com',
   'user-adres': {
      city: 'Omsk'
   },
   skills: ['html', 'css', 'js']
};
console.log(user);

//Чтобы обратиться к свойствам объекта есть 2 варианта: 1й вариант: имя объекта.свойство, которое нужно получить пр.

let value;
value = user.firstName;

console.log(value);

//2й вариант: через квадратные скобки []

value = user['isAdmin'];
console.log(value);


value = user['user-adres'];
console.log(value);

//получить вложенные свойсвта в объекте можно так:value = user['user-adres'].city; а можно так:

value = user['user-adres']['city'];
console.log(value);

//при использовании квадратных скобок можно подставлять внутрь переменные

let prop = 'skills';
value = user[prop];
console.log(value);

value = user[prop][0];
console.log(value);

user.firstName = 'Dema';
value = user.firstName;
console.log(value);

//если записать свойство с значением, которого нет в объекте, то оно добавится пр.

user.info = 'some info'
value = user.info;
console.log(value);

//тоже самое, если нужно перезаписать вложенное значение объекта user['user-adres']['city'] = 'москва' или

user['user-adres']['city'] = 'москва';

//так же можно создать новое вложенное значение

user['user-adres'].country = 'Россия';
