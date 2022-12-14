/*Реализуйте функцию для решения задачи ЛР1#1860(открыть в новой вкладке)*/
function task1860(a) {
    return "Мы стремимся к " + a;
}
/*В файле для исходного кода реализуйте функцию task1860.
В качестве аргументов ей будут передавать 1 строку.
В теле функции task1860 нужно напечатать в консоль решение задачи, используя значение аргумента в качестве исходных данных.
Проверьте корректность работы функции с помощью вспомогательного файла
В корне директории создайте файл Runner1860.html. Подключите в нем файл с кодом "src/lab12.js".
В скриптах на странице Runner1860.html вызовите функцию task1860.
В качестве аргумента передайте ему строковый литерал "знаниям"
Вызовите функцию task1860 еще раз и передайте ей строковый литерал "цели".
Вызовите функцию task1860 третий раз с аргументом "результату"
При открытии файла Runner1860.html, в консоли должен появиться текст:
Мы стремимся к знаниям
Мы стремимся к цели
Мы стремимся к результату*/

function task4411(a) {
    return a + 7;
}

function distanceBetweenInts(ax, ay, bx, by) {
    return Math.sqrt(Math.pow((bx - ax), 2) + Math.pow((by - ay), 2));
}

/*function distanceBetweenObjects(ax,ay,bx,by){
    return Math.sqrt(Math.pow((bx - ax), 2) + Math.pow((by - ay), 2));
}*/

function distanceBetweenObjects(a, b) {
    return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
}

function hasIntersectionInts(redA, redB, greenA, greenB) {
    if (redA > redB || greenA > greenB) {
        let e = Error("Некорректный интервал. Левая граница должна быть меньше правой.")
        throw e;
    }

    if (redB <= greenA) {
        return "Интервалы не пересекаются. Правый край красного левее левого края зеленого."
    }

    else if (greenB <= redA) {
        return "Интервалы не пересекаются. Правый край зеленого левее левого края красного."
    }

    else {
        return "Интервалы пересекаются."
    }


}

function hasIntersectionObjects(red, green) {
    if (red.x > red.y || green["x"] > green.y) {
        let e = Error("Некорректный интервал. Левая граница должна быть меньше правой.")
        throw e;
    }

    if (red.y <= green.x) {
        return "Интервалы не пересекаются. Правый край красного левее левого края зеленого."
    }

    else if (green.y <= red.x) {
        return "Интервалы не пересекаются. Правый край зеленого левее левого края красного."
    }

    else {
        return "Интервалы пересекаются."
    }


}

/*function distanceTo(a, b) {
    return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
}*/