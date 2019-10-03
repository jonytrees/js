// number


var a = 0.3 - 0.2;
var b = 0.2 - 0.1;

// alert (b);

'hello'; // можно так
"hello"; // можно так

"he'll'o"; // можно так, нельзя внутри двойних ковычек использовать двойные ковычки

'O\'neel'; // икронирование ковычки
"O\"neel"; // экронирование двойной ковычки

"hello \n world"; // перевод строки

"hello \n\t world"; // перевод строки с табуляцией

"hello \\ world"; // отображение слеша

"hello \xA9 world"; // символ copyright

// == оператор равенства, допускает преобразование типов '10' == 10 - true
// === оператор идентичности, НЕ допускает преобразование типов '10' === 10 - false

'Hello' < 'hello'; // true
'Hello' < 'hel'; // true
'Hello' < 'h'; // true

var y = 10; //true
!y; // false
!!y; //true

// && - логическое И
true && false // false
false && true // false
false && false // false
true && true // true

// 1,2,3 infinity, -infinity, 'string' => true
// 0 -0 null NaN undefined => false

10 && 20 // 20: 10 - истина, 20 - истина и возвращает последний операнд

56 - 56 && 10 + 40; // 0 - false: 0 является ложным выражением

!true && false; // false

// || - логическое или
true || true // true
true || false // true
false ||  true // true
false || false // false

56 - 56 || 10 // 10: 0 - false, 10 - истина

//++ // инкримент
//-- // декримент

var a = 10;
++a; // 11

var a = 10;
--a; // 9

var a= 10;
var b = a++; // 10 сначала присваивается потом увеличивается
var b = ++a; // 11 сначала увеличивается потом присваивается

a = a + b; // аналогично a+=b

// % // оператор остатка на деление в основном используется для проверки на четное число

var a = 10 + 20; // инструкция
var b = 140 + 220; // инструкция
var c = 40 + 22; // инструкция

var a = 10;
var b = 20;

// if(a > 10) alert('hello'); // ничего не будет
// if(a > 9) alert('hello'); // выведет hello

if(a > 9){
 var с = b+a;
 // alert(c);
}

if(a){ // вернет 10 - true;
 var с = b+a;
 // alert(c);
}

if(a>0 && b<25){

 if(c==0){
  // alert(c);
 }
}

switch(a){

  case 30:
    // alert('hello');
    break; // останавливает всего switch и перенаправит за пределы switch

    case 20:
        // alert('20');
        break;

    default: // если остальные case не отработали
        // alert('default');
        break;
}


var count = 0;
// каждый шаг цикла называется итерацией
while(count < 10){ // выполняется пока возвращает true
    // console.log(count);
    count++; // если убрать то будет бесконечный цикл
}

// for(;;){ // бесконечный цикл
//     с = с * 2;
// }

var i = 0;
for(; i < 10; i++){
    // console.log(i);
    if(i == 5){
        break; // выйдет за пределы for
        // continue; // перенаправляет к следующей итерации цикла начинает выаолнять инкремент. код ниже console.log(i); не будет выполнен
    }
   // console.log(i);
}

// var str = '<table border="1px" width="30%">';
// for(var n = 1; n < 10; n++){
//     str += "<tr>";
//
//     for(var j =1; j < 10; j++){
//         str += '<td>';
//         str += n * j;
//         str += '</td>';
//     }
//
//     str += "</tr>";
// }
//
// str += '</table>';
//
//
// var el = document.getElementById('table');
// el.innerHTML = el.innerHTML + str;

var v = 'hello';
var m = ' world';

v += m;
// alert(v);



showHtml(); // вызов функции можно осуществлять и до ее объявления

function showHtml(){
    // alert('hello');
}

showHtml();

var result = 100; // глобальная переменная и не имеет ничего общего с result внутри функции

function func(param1, param2){ // параметры это грубо говоря переменные функции
    if(param1 == 40){
        // alert('hello');

        //return; в данном случае возвращается undefined
        // return param1; возвращает определенный результат в данном случае 40 и этот результат присваивается переменной  var res = func(b-a, a+b);
    }
    var result = param1 * param2; // локальная переменная имеет отношение только к функции
    // alert(result);
}

var a = 10;
var b = 50;

func(10,30);

func(a, b);
// func(a, a*b);
var res = func(b-a, a+b);
// console.log(result);


function fun2(par1, par2){ // параметры доступны для вложенной функции
    var result = par1*par2;

    function fun3(a){
        return result * par2 * a;
    }

    result = fun3(2);

    return result;
}

document.write(fun2(10,30));


var funct = function foo(param1, param2){
    // foo(); // к функции можно обратиться только внутри функции
    // console.log(param1);
};

// var funct =  (function foo(param1, param2){ // объявление funct можно исключить и название функции тоже
//     // foo(); // к функции можно обратиться только внутри функции
//     console.log(param1);
// } (10, 20)); // сразу передача параметров и вызов происходит сразу

funct(10, 20);

// рекурссия - вызов функции саомй себя
function foot(x){

    if(x <= 1){ // условие выхода из рекурсии
        return 1;
    }
    return x * foot(x-1);
}
console.log(foot(10)); // вычисление факториала

var f = function fact(x){
    if(x <= 1){ // условие выхода из рекурсии
        return 1;
    }

    return x * fact(x-1);
};

// document.write(f(3)); //атоже самое только в виде выражения и не инструкции

function fars(param1, param2){
    // var result = param1 * param2;

    //arguments // это объект параметров. он как массив и в нем вме параметры которые передаются в функцию
    var result = arguments[0] * arguments[2]; // аналог того что выше
    return result;
}

// alert(fars(10, 20, 43, 56, 486, 694));


var arr = []; // массив
var arr2 = [1,2,3,4,5]; // у каждого элемента есть свой индекс

var a = 'script';
var arr3 = [1, 2, a, 4]; // определить значение переменной в массив
var arr4 = [1, 2, 3, 4, [1,2,3], 5]; //массив в массиве

var arr5 = [a+10, a-2];

var arr6 = new Array(); // формируется объект нового массива. пустой массив

var arr6 = new Array(5); // длина указывается в качетсве параметра. длина имеется в виду сколько элементов в массиве

var arr6 = new Array(1,2,3,4,5); // передача значений массива в качестве параметров


var i = 5;
arr2[i] = 'hello';
arr2[2] = 'world';
// alert(arr2);
// alert(arr2[0]);

// alert(arr2.length); // кол-во элементов  массива

arr2[100] = 100;


 var k = Object.keys(arr2); // возвращает значения свойств (индексы) (ключ) в качестве параметров
// for(var i = 0; i < arr2.length; i++){
//
//     document.write(arr2[i] + '<br>');
//
// }

for(var i = 0; i < k.length; i++){

    // document.write(k[i] + '=>' +arr2[k[i]] + '<br>');

}

// var arr3 = [[1,2,3], 4, 5];
//
// alert(arr3[0][1]);

var table = new Array(10);
for(var i = 0; i < table.length; i++){

    table[i] = new Array(10);

}

for(var row = 0; row < table.length; row++){

    for(var col = 0; col < table[row].length; col++){

        table[row][col] = row*col;

    }

}

// alert(table[5][6]);


// var arr2 = [1,2,3,4,5,6,7];
//
// arr2[9] = [3,6,1,7];

// if(3 in arr2){ // оператор in позволяет проверить наличие свойства (индекса)
//     alert('true');
// }else{
//     alert('false');
// }


// if (Array.isArray(arr2)){ // проверяет действительно ли в переменной хранится массив
//     alert('true');
// }else{
//     alert('false');
// }


//alert(arr2.join()); // join преобразует все элементы массива в строку и разделяет их запятой
//alert(arr2.join('-')); // join преобразует все элементы массива в строку и разделяет их чертой, со вложенными массивами не работает

//alert(arr2.reverse()); // отображает элементы массива в обратном порядке

// alert(arr2.sort()); // возвращает сортированный массив не корректно работает
// alert(arr2.sort(function(a, b){
//     return a-b; // по увеличению
//    // return b-a; // по уменьшению
// })); // возвращает сортированный массив

//var arr_res = arr2.concat([10, 4, 8]);// добавляет к массиву то что указано в виде параметров, возвращает новый массив
//alert(arr_res);

// var arr_res = arr2.slice(0,2); // возвращает массив включающий элементы с индексам от 0 до 2 но не включая элемент с индексом 2
// var arr_res = arr2.slice(2); // возвращает массив от индекса 2 и до конца
// var arr_res = arr2.slice(-2); // возвращает массив от индекса 2 СПРАВА и до начала

//arr2.splice(); // изменяет текущий массив а не возвращает новый массив
//arr2.splice(2, 2); // первый параметр указывает позицию с которго будет изменение, второй указывает кол-во элементов
//alert(arr2.splice(2, 2)); // вернет удаленные элементы
//arr2.splice(2, 2,5,6,7) // были удалены 2 элемента со второй позиции и добавлены 5 6 7

//arr2.push(10,20,30); // добавляен элементы к конец массива и озвращает новую длина массива
//arr2.pop(); // удаляет последний элемент массива
//alert(arr2.pop()); // возвращает удаленный последний элемент

//arr2.unshift(10,20,30); // добавляет в начало массива
//arr2.shift(); // удаляет первый элемент

//delete arr2[0]; // удаляет ячейку в массиве, индексы не смещаются

// forEach - выполяент обход для каждого элемента массива и вызывает для них функцию
// arr2.forEach(function(v,i,a){ // v - значение элемента массива, i - индекс элемента, a - имя массива
//     a[i] = v + 10 + 'hello';
// });

//map - возвращает конкрентое значение, новый массив
// var res = arr2.map(function(x, i, a){ // x - значение элемента массива, i - индекс элемента, a - имя массива
//     return x*x;
// });


// возвращает массив определнное кол-во элементов исходного массива
// var res = arr2.filter(function(x, i, a){// x - значение элемента массива, i - индекс элемента, a - имя массива
// //     return x < 5;
// // });


// возвращает истину если функцию возвращает истину для всех элементов массива
// var res = arr2.every(function (x,i,a) {
//     return x < 11;
// });


// возвращает истину если функцию возвращает истину хотя бы для одного элементов массива
// var res = arr2.some(function (x,i,a) {
//     return x < 5;
// });


// для объединения элементов массива, возвращает одно единственное значение
// var res = arr2.reduce(function(x,y){ // x - накопленный результат данной функции, y - текущая ячейка для котрой вызывается функция
//
//     return x+y;
//
//     // 1+2+3+4+5+6+7
//
// }, 0); // 0 - значение x по умолчанию, если нет то используется первая ячейка

// reduceRight(); // такая же работа только в обратном порядке от больших индексов к меньшим

//indexOf(); // ищет от начала индекс по значению элемента указанный в качестве параметра
//lastIndexOf(); // ищет с конца
//
// alert(arr2.indexOf(3));
// alert(arr2.lastIndexOf(6));

// arr2['hello'] = 'world';
// for(var key in arr2) { // в key записывают индексы или имена свойств
//     document.write(key + '=>' + arr2[key] + '<br>');
// }
// alert(res);

//var date = new Date(); // создает объект для работы с датой и временем - правильный вариант
// var date2 = Date(); // тоже создается объект - в таком случае не можем передавать параметры в конструктор Date()
//var date = new Date(14234); // дата определяется как отчет от 1 января 1970 + количество миллисекунд в качестве праметра
//var date = new Date("Apr 25 2016"); // приводится к строкому виду и создается объект
// var date = new Date(2016,2,25,13,45,30,10);
// var date = new Date();
// date - это уже объект
// Date - это конструктор
// после точки это методы date.getDate

//alert(date.getDate()); // метод возвращает текущую дату - день
//alert(date.getDay()); // метод возвращает текущую дату - день недели в виде числа от 0

// var days = ['воскресенье', ' суббота', 'вторник'];
// alert(days[date.getDay()]); // вернет в виде названия дня недели

//alert(date.getFullYear()); // текущий год
//alert(date.getHours()); // возвращает время
//alert(date.getMilliseconds()); // возвращает миллисекунды
//alert(date.getMinutes()); // минуты
// alert(date.getMonth()); // месяц в виде числа

// var days = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'сентябрь', 'август', 'октябрь'];
// alert(days[date.getMonth()]);

//alert(date.getSeconds()); // секунды

//alert(date.getTime()); // возвращает сколько милисекунд прошло с 1 января 1970 года
// alert(date.getTimezoneOffset()); // смещение текущего времени по гринвичу в минутах
//alert(date.getTimezoneOffset());

//date.setDate(10); // устанавливет месяц для текущего объекта date в виде числа
// date.setFullYear(2014, 7, 25); // устанавливает год, может еще месяц и день
// date.setHours(22,43,24,10); // установить часы, также может минуты секунды и мс
// date.setMilliseconds(); // мс
// date.setMinutes(56,34,23); // минуты сек и мс
// date.setMonth(3,10); // месяц и число
// date.setSeconds(10); // сек
// date.setTime(1231); // устанавливет дату со дня 1 января 1970 + мс

// console.log(date.toDateString()); // преобразует в строку
// console.log(date.toUTCString()); // преобразует в строку универсальную дату и время п огринвичу
// console.log(date.toJSON()); // в формате json
// console.log(date.toLocaleDateString()); // возвращает строковое представление даты относительно локальности
// console.log(date.toLocaleString()); // возвращает строковое представление даты и времени относительно локальности
// console.log(date.toLocaleTimeString()); // возвращает строковое представление времени относительно локальности
// console.log(date.toString()); // в строку дату и время
// console.log(date.toTimeString()); // смещение по гринвичу
// console.log(Date.now()); // текущее время в мс с 1970
// console.log(Date.parse(date.toString())); // анализирует строковое представление даты и врменеи и возвращает в мс


// function displayTime(){
//     var now = new Date();
//
//
//     var div = document.getElementById('clock');
//
//     // innerHTML - содержимое элемента, переопределяет новое содержимое
//     div.innerHTML = now.toLocaleTimeString(); // через innerHtml в div всписывается свой html
//
//     setTimeout(displayTime,1000); // запускает на исполнение определенную функцию которая первый параметр через 1 сек
// }


// function displayTime2(){
//     var now = new Date();
//
//
//     var div = document.getElementById('clock');
//
//     var sDate = new Date(2019, 11, 1);
//
//     var timer = sDate.getTime() - now.getTime();
//
//     var days = parseInt(timer/(24*60*60*1000)); // приводит значение к целочислему типу данных
//     var hours = parseInt(timer/(60*60*1000))%24; // приводит значение к целочислему типу данных
//     var min = parseInt(timer/(60*1000))%60; // приводит значение к целочислему типу данных
//     var sec = parseInt(timer/(1000))%60; // приводит значение к целочислему типу данных
//
//     // innerHTML - содержимое элемента, переопределяет новое содержимое
//     div.innerHTML = days + ':' + hours + ':' + min + ':' + sec; // через innerHtml в div всписывается свой html
//
//     setTimeout(displayTime2,1000); // запускает на исполнение определенную функцию которая первый параметр через 1 сек
// }
//
// window.onload = displayTime2; // вызов функции тогда когда загрузка страницы будет завершена


// function stringWork(){
//     var str = document.getElementById('head').innerHTML; // получаем содержимое head

    // new String(); // с new это конструктор и возвразщает объект
    //Sting(); // функция преобразования

    //var result =typeof  String(str); // преобразовывает в строковое значение
    // typeof возвращает тип

    // var result = str.charAt(10); // возвращает символ с индексом 10
    // var result = str[10]; // аналогично вверху

    // var result = str.charCodeAt(15); // возвращает код символа по индексу
    // var result = str.concat('hello ', 'world'); // добавляет в конце строки
    // var result = String.fromCharCode(str.charCodeAt(15)); // статический метод и вызывается у объекта, возвращает символ
    // var result = str.indexOf('javascript'); // возвращает индекс первого символа аргумента
    // var result = str.length;
   // var result = str.localeCompare('а');
    //var result = str.match(/\/d+/); // находит соотествия регулярному выражению, возвращает массив

    // var result = str.slice(5,10); // возвращает фрагмент от 5 индекса до 10 не включая 10-ый
   // var result = str.split(' '); // по аргкменту разделяет запятой
   // var result = str.substr(1,2); // возвращает фрагмент строки начиная с символа с первого аргумента в количестве второго аргумента
   // var result = str.substring(1, 5); // 1 - начало, 5 - до какого возвращает фрагмент, не работает с отрицательными числами
   // var result = str.toLocaleLowerCase(); // преобразует символы в нижний регистр
   // var result = str.toLowerCase(); // преобразует символы в нижний регистр без учета локалий
   // var result = str.toLocaleUpperCase(); // преобразует символы вверхний регистр
    //var result = str.toUpperCase(); // преобразует символы вверхний регистр без учета локалий




    //Math - не имеет функции конструктора методов нет, есть свойства
    //var result = Math.abs(-10); // 10 возвращает абсолютное значение
    // var result = Math.acos(-1); // возвращает арткосинус
    // var result = Math.asin(-1); // возвращает артсинус от -1 до 1
    // var result = Math.asin(-1); // возвращает артсинус от -1 до 1
    // var result = Math.atan(-1); // возвращает артстангенс
    // var result = Math.ceil(3.5); // округляет до вверхнего числа
    // var result = Math.cos(1); // возвращает косинус аргумента
    // var result = Math.E; // возвращает математическую константу 2.71
    // var result = Math.exp(2); // возвращает математическую константу в степени аргумента
    // var result = Math.floor(2.4); // округляет до меньшего числа
    // var result = Math.LN10; // логорифм по отснованию 10 в степени экспоненты (математическая константа)
    // var result = Math.LN2; // логорифм по отснованию 2 в степени экспоненты (математическая константа)
    // var result = Math.log(10); // вычисляет натуральный логорифм переданый в аргементе
    // var result = Math.LOG10E;
    // var result = Math.LOG2E;
    // var result = Math.max(10,1,76,39,100, Infinity); // возврщает наибольший аргумент из списка аргументов
    // var result = Math.min(10,1,76,39,-100, -Infinity); // возврщает наименьший аргумент из списка аргументов
    // var result = Math.PI; // возврщает значение числа пи
    // var result = Math.pow(2,3); // возвращает x в степени y
    // var result = Math.random(); // возвращает псевдослучайное число от 0 до 1
    // var result = Math.random()*100; // возвращает псевдослучайное число от 0 до 100
    // var result = Math.floor(Math.random()*100); // возвращает псевдослучайное число от 0 до 100 и округляем его
    // var result = Math.sin(30 * ((2*Math.PI) / 360)); // синус аргумента (2*Math.PI) / 360) - перевод в радианы
    // var result = Math.sqrt(25); // вычисляет квадратный корень аргумента
    // var result = Math.SQRT1_2; // вычисляет 1 деление на корень из двух
    // var result = Math.SQRT2; // вычисляет корень из 2
    // var result = Math.tan(45 * ((2*Math.PI) / 360)); // вычисляет тангенс аргумента


    //NaN // - глобальное свойства не опреледенное число
    //alert(Number.NaN);
    //var result = NaN == NaN; // false
   // var result = NaN;
    //result = result != result; // true следовательно в result NaN
   // result = isNaN(result); // true
   // var result = typeof new Number(10); // объект
    //var result = Number(10); // возвращает число

  //  var result = Number.MAX_VALUE; // МАКсимальое значение
   // var result = Number.MIN_VALUE; // минимальное значение

   // var result = Number.NEGATIVE_INFINITY; // ПЛЮС бесконечность
   // var result = Number.POSITIVE_INFINITY; // минус  значение

   // var result = Number.toString; // преобразует в строку
   // var result = Number.toLocaleString(); // преобразует в строку с локализацией

    // var result = Number.toFixed(10);

    // var result = Number.toPrecision(10); // форматирует значимые цифры числа

    //var result = parseFloat('10.23hello world'); //выполняет синтаксический разбор аргумента и выводит числа -  10.23

//     var result = parseInt('10.23hello 10 world'); // выполняет синтаксический разбор и возвращает целое число - 10
//     document.getElementById('result').innerHTML = result;
//
// }

// window.onload = function(){
//     stringWork();
// }


// 1 способ создания объекта. через литерал (скобки)
var obj = {

};

var a = 10;
var b = 20;

var obj1 = { // именем свойства может быть идентификатор или строковый литерал
    one : 'hello', // one - имя свойства (идентификатор ), hello - значение свойства
    two : 'world',
    'some string' : a+b, // some string - тоже имя свойства
    three : { // дополнительный объект
        a : 1,
        b : 2,
        c:{
            str1: 10,
            str2: 20
        }
    }
};

// 2 способ создания

var obj2 = new Object(); // var obj2 = {}

console.log(obj1.two);
//console.log(obj1.'some string'); // error

console.log(obj1['some string']); // true

var str = 'some string';
console.log(obj1[str]); // true [] - возвращается выражение имени свойства

//obj1.two = 'new string'; // новое значение

// динамическое добавление свойств в объект
// function addObj(o, i, v){ //o - объект i - имя свойства v - значение свойства
//     return o[i] = v;
// }

// addObj(obj, 'one', 'hello');
// addObj(obj, 'two', 'world');
// console.log(obj.one);
// console.log(obj.two);

// 3 способ создания
var obj3 = Object.create(obj1); // наследование объекта
var obj3 = Object.create(null); // пцстой объект которые не наследует ничего ( не имеет прототипа)
var obj3 = Object.create(Object.prototype); // аналог var obj3 = new Object(); var obj3 = {}

obj3.one = 1; // если не было свойства то оно создатся и будет скрыто у прототипа, свойство у прототипа не переопределяется
console.log(obj3.one);


// delete obj1.one; // может удалять только собсветтные свойства, унаследованные не может


function iteration(o){ // o - объект
    for(v in o){ // v - записывается имя свойства

        if(!o.hasOwnProperty(v)){ // проверка на собственные свойства, перейдет на след. итерацию
            continue;
        }

        if(typeof o[v] === 'function'){ // проверка на то что нам не нужны методы, перейдет на след. итерацию
            continue;
        }

        if(typeof o[v] == 'object'){
            iteration(o[v]);
        }else{
            console.log(v + '-' + o[v]);
        }


    }
}
//
//
// iteration(obj1);


// способы проверки свойства
// undefined итерпритируется как false
// if(obj1.one){
//     alert(obj1.one);
// }
//
// // такой способ найдет свойство со значеним undefined
// if('one' in obj1){ // если было бы one то js искал бы выражение (переменную)
//     alert(obj1.one);
// }
//
// /// возвращает истину если свойтсво является собственным
// if(obj1.hasOwnProperty('one')){ // поиск определенного существуемого свойства у объекта
//     alert(obj1.one);
// }
//
// // возвращает истину если свойтсво является собственным
// if(obj1.propertyIsEnumerable('one')){ // поиск определенного существуемого свойства у объекта
//     alert(obj1.one);
// }
//
// if(obj1.one !== undefined){
//     alert(obj1.one);
// }

// var obj4 = {
//
//     prop1: 30,
//     prop2 : 50,
//     func: function(){ // определили метод
//         console.log(this.prop1 + this.prop2); // this указатель на текущий объект - аналог obj4.prop1
//
//        // foo(this); // передача всего объекта функции foo
//     }
// };
//
// obj4.func2 = function(){ // созадли метод за пределами объекта
//     alert('lol2');
// };
//
// function foo(){
//     console.log('foo');
// }
//
// obj4.func3 = foo; // задали метод объекта которые реализован отдельно от объекта
//
// obj4.func(); // вызов метода на исполнение
// // obj4.func2(); // вызов метода на исполнение
// // obj4.func3(); // вызов метода на исполнение


var o = {
    prop1 : 10,
    prop2: 50,

    func: function(){ // определили метод
        console.log(this.prop1 + this.prop2); // this указатель на текущий объект - аналог obj4.prop1

       // foo(this); // передача всего объекта функции foo
    },

    // get метод чтения
    // summ это свойство
    get summ(){ // значение этого свойства станет возвращенное значение то есть получает значение
        return this.prop1 + this.prop2;
    },

    // set метод записи
    set summ (value){ // value - значение которое пытаемся записать
        this.prop1 += value; // этот метод должен что то изменить
    }
}

// o.summ = 5;
// console.log(o.summ);

// работа с атрибутами свойств: значение, признак доступности для записи, признак доступности для enumerable, признак достпуности для настройки
Object.defineProperty(o, 'prop3', { // Object.defineProperty служит для определения атрибутов
    value: 100,
    writable: true, // доступность свойства для записи, возможность переопределить
    enumerable: true, // доступность перечисления для цикла for(in), доступность к свойству
    configurable: true, // доступность свойства для настройки, если false до ниже нельзя будет преопределить атрибуты ниже
})

Object.defineProperty(o, 'prop3', { // скобки это дескриптор
    // если не были указаны остальные то они возьмутся из выше
    enumerable: false, // доступность свойства для настрйоки
})

iteration(o);


//var o2 = new fuu(a,b,c);

function People(name, age){// функция-конструктор и используется для формирования объекта
    this.name = name; // обращение к будущему свойству объекта
    this.age = age;

    // this.summ = function(){
    //     return this.name + '-' + this.age;
    // }
}

People.prototype = obj1; // obj1 - это прототип для объекта ben
People.prototype.summ = function(){ // у прототипа сформировали новое свойство которое будет представлять собой свойство
    return this.name + '-' + this.age; // результат не изменится
}

var ben = new People('ben', 18);
console.log(ben.name); // ben
console.log(ben.one); // здесь выводим свойство из прототипа obj1
console.log(ben.summ()); // обращение к методу



//window.location = 'http://google.ru'; // перенаправляет на сайт

//window.alert('hello');

//window.document // document это содержимое окна
//window.document.getElementById('id'); // определяет в документе элемент id="id"-это объект (имеет свойства и методы)


//setTimeout();//  запуск функции через определенное время
//setInterval();// повторный запуск функции через определенное время



window.onload = function(){ // выполнится после полной загрузки страницы
    var wrap = document.getElementById('popup_overlay');
    var closeB = document.getElementById('popup_close');
    closeB.onclick = popClose;

    var inP = document.getElementById('popupIn');
    inP.onclick = popup;


    var tIn, tOut; // в них передаются значение с помощью которых можно отменить вызов функций

    function popup(){
        wrap.style.display = 'block'; // popup_overlay - это объект а значи display это свойство
       // wrap.style.opacity = '1'; // popup_overlay - это объект а значи opacity это свойство

        popIn(1);
    }

    function popClose(){
        popOut(0);
    }

    // функция анимации плавного появления popup
    function popIn(x){
        // var op = wrap.style.opacity;
        // if(op){
        //     parseFloat(op);
        // }else{
        //     op = 0;
        // }

        //тернарные операторы. условие ? выражение1 : выражение2   аналог опписан выше
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if(op < x){

            clearInterval(tOut); // отменяет ранее запланированный выхов функции
            op += 0.05;
            wrap.style.opacity = op;

            tIn = setTimeout(function(){
                popIn(x);
            }, 20);
        }
    }

    // функция анимаци плавного исчезновения popup
    function popOut(x){
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0; // parseFloat возвращает десятичное число с правающей токой

        if(op > x){

            clearInterval(tIn); // отменяет заранее запланированный выхов функции
            op -= 0.05;
            wrap.style.opacity = op;

            tOut = setTimeout(function(){
                popOut(x);
            }, 20);
        }

        if(wrap.style.opacity == x){
            wrap.style.display = 'none';
        }
    }

    setTimeout(popup, 3000);

    var h1 = document.getElementById('header');

    h1.onclick = function(){
        clearTimeout(intStop); // отсновлен вызов функции смены цветов заголовок
    }


    function changeColor(){
        if(h1.style.color == 'black'){
            h1.style.color = 'red';
        }else{
            h1.style.color ='black';
        }
    }

   var intStop = setInterval(changeColor, 500);

    // типы диалоговых окон

    // alert();
    //confirm(); // показывает две кнопки: ок (true) и cancel (false) и возвращает значения с этих кнопок
    //prompt(); // выводит сообщения и ждет текста от пользователя и возвращает текст в виде значения

    // do{
    //     var str = prompt(' введите сообщение ');
    //
    //     var result = confirm(' вы ввели ' + str + '. нажмите на ок для продолжения или cancel для повтора');
    // }
    // while(!result);
    //
    // alert(str);
}



