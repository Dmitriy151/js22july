describe("lab13", function () {
    it("task1860", function () {
        let actual = task1860("знаниям");
        expect(actual).toEqual("Мы стремимся к знаниям");
        actual = task1860("цели");
        expect(actual).toEqual("Мы стремимся к цели");
        actual = task1860("результату");
        expect(actual).toEqual("Мы стремимся к результату");

    });

});

/*Реализуйте функцию для решения задачи ЛР2#4411(открыть в новой вкладке)
В файле для исходного кода реализуйте функцию task4411.
В качестве аргументов ей будут передавать 1 число.
В теле функции нужно вернуть результат решения задачи, используя значение аргумента в качестве исходных данных.

Проверьте корректность работы функции с помощью юнит-теста
В файле с юнит-тестами вызовите функцию it. Она уже реализована в Jasmine. Первый ее аргумент - описание теста, например "в задаче 4411 должен получиться корректный результат". Второй аргумент - анонимная функция, содержащая код для проверки.
В теле юнит-теста объявите переменную actual.
Для каждой строки тестовых данных из задачи напишите в теле юнит-теста фрагмент кода:
Вызовите функцию task4411.
Передайте ей в качестве аргументов значения исходных данных для одного теста из задачи.
Результат вызова функции запишите в переменную actual.
Поскольку результат это число, то корректность результатов каждого вызова функции task4411 нужно проверить с помощью функции expect в сочетании с функцией toBeCloseTo. Они также реализованы в Jasmine.
Вызовите функцию expect и передайте ей в качестве аргумента переменную actual.
В той же строке через точку вызовите функцию toBeCloseTo. Первый аргумент этой функции - ожидаемое значение. Второй - точность. Это количество знаков после запятой, которые должны совпадать в результате. Для этой задачи достаточно указать 4.
При открытии файла SpecRunner.html, в нем должна быть зеленая строка "в задаче 4411 должен получиться корректный результат".*/

describe("lab13", function () {
    it("task2790", function () {
        let actual = task4411(11.13);
        expect(actual).toBeCloseTo(18.1300);
        //actual=task1860("цели");
        //expect(actual).toEqual("Мы стремимся к цели");
        //actual=task1860("результату");
        //expect(actual).toEqual("Мы стремимся к результату");

    });

});

describe("lab15", function () {
    it("distanceBetweenInts", function () {
        let actual = distanceBetweenInts(1, 1, 3, 4);
        expect(actual).toBeCloseTo(3.6056);
        //actual=task1860("цели");
        //expect(actual).toEqual("Мы стремимся к цели");
        //actual=task1860("результату");
        //expect(actual).toEqual("Мы стремимся к результату");

    });

});

/*describe("lab15",function() {
    it("distanceBetweenObjects1",function(){
        let actual=distanceBetweenObjects(1,1,3,4);
        expect(actual).toBeCloseTo(3.6056);
        //actual=task1860("цели");
        //expect(actual).toEqual("Мы стремимся к цели");
        //actual=task1860("результату");
        //expect(actual).toEqual("Мы стремимся к результату");

    });

});*/


describe("lab15", function () {
    it("distanceBetweenObjects", function () {
        let a = { x: 1, y: 1 };
        let b = { x: 3, y: 4 };

        let actual = distanceBetweenObjects(a, b);
        expect(actual).toBeCloseTo(3.6056);
        //actual=task1860("цели");
        //expect(actual).toEqual("Мы стремимся к цели");
        //actual=task1860("результату");
        //expect(actual).toEqual("Мы стремимся к результату");

    });


    it("distanceBetweenInts", function () {
        let actual = hasIntersectionInts(2, 3, 5, 7);
        expect(actual).toEqual("Интервалы не пересекаются. Правый край красного левее левого края зеленого.");
        //actual=task1860("цели");
        //expect(actual).toEqual("Мы стремимся к цели");
        //actual=task1860("результату");
        //expect(actual).toEqual("Мы стремимся к результату");

    });




    it("hasIntersectionObjects", function () {
        let red = { x: 2, y: 3 };
        let green = { x: 5, y: 7 };

        let actual = hasIntersectionObjects(red, green);
        expect(actual).toEqual("Интервалы не пересекаются. Правый край красного левее левого края зеленого.");


    });
});


describe("lab15", function () {
    it(" distanceTo", function () {
        let a = {
            x: 1,
            y: 1,
            distanceTo: function () { }
        };
        let b = { x: 3, y: 4 };

        let actual = distanceBetweenObjects(a, b);
        expect(actual).toBeCloseTo(3.6056);

    });

});
