'use strict'

// 0 Создать числовой массив и проинициализировать его (*случайными числами).

let arr = []; 
for(let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.table(arr);


// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.

console.log(arr.pop());
console.log(arr.push(100));
console.log(arr.unshift(200));
console.log(arr);

// 2 Вывести размер массива.

console.log(arr.length);

// 3 Вывести элементы с четными индексами.

arr.forEach(isEvenIndex);
function isEvenIndex (element, index) {
    if (index % 2 === 0) {
        console.log(element);
    }
}

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).

arr.forEach(isEven);
function isEven(element) {
    if (element % 2 === 0) {
        console.log(element);
    }
}

// 5 Вывести индексы нулевых элементов (элемент равен нулю).

arr.forEach(isZero);
function isZero(element, index) {
    if (element === 0) {
        console.log(index);
    }
}
console.table(arr);

// 6 Подсчитать количество нулевых элементов.

let zCount = 0;
arr.forEach(countZero);
function countZero(element) {
    if (element === 0) {
        zCount++;
    }
}
console.log(zCount);

// // Методы перебора массивов.
// 7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).

const arr1 = [-1, 5, 0, 9, -10];
const arrPositive = arr1.filter(isPositive);
function isPositive(element) {
    return element > 0;
}
console.log(arrPositive);

// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).

const arrSquare = arr1.map(toSquare);
function toSquare(element) {
    return element * element;
}
console.log(arrSquare);

// 9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).

const arr2 = [1, -4, 88, 'num', 2, -3];
function positiveNum(element) {
    return element > 0 && typeof element === 'number';
}
console.log(arr2.map(positiveNum)); 

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.

console.log(arr2.some(isNegative));
function isNegative(element) {
    return element < 0;
}

// 11 Вывести элементы массива, возведенные в куб.

const arrCube = arr2.map(toCube);
function toCube(element) {
    return element * element * element;
}
console.log(arrCube);

// *12 Прописать для MyArray метод unshift.

function MyArray () {
    this.length = 0;
    this.unshift = function (item) {
        for (let i = this.length; i > 0; i--) {
            this[i] = this[i - 1];
        }
        this[0] = item;
        return ++this.length;
    }
}

let arr3 = new MyArray();
arr3.unshift(1);
arr3.unshift(2);
arr3.unshift(3);
arr3.unshift(4);
console.log(arr3);
