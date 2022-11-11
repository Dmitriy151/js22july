/*function f2() {
   console.log(2);
}

f2();
console.log(f2());//функция не возвращает никакого значения поэтому в консоль выводится undefined*/

//return позволяет возвращать какое то значение из функции

function f2() {
   console.log(2);
   return 5;
}

f2();//при вызове F2 возвращается значение 5, что позволяет использовать F2 внутри других выражений

//пр
function f1(x, y) {
   let sum = x + y;
   return sum;
}

console.log(11 + 5 + f1(4, 5));// return вернет значение sum в f1() с аргументами 4 и 5, которое сложиться с 11 и 5

//можно вообще убрать переменную sum из функции return будет возвращать x + y

function f1(x, y) {
   return x + y;
}

console.log(f1(6, 7) + f1(4, 5));//22

document.querySelector('.out-1').textContent = f1(300, 400);
//alert(f1(3, 4));

function randInt(min, max) {//функция генерирует случайные числа
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}

document.querySelector('.out-1').style.background = 'rgb(23,156,201)';
document.querySelector('.out-1').style.background = `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)}`;//получаются случайные цвета в background


