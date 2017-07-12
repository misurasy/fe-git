
// dz+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Что выведет следующий код? Почему?
// getBigName(userName);
  
// function getBigName(name) {
// name = name + '';
// return name.toUpperCase();
// }
// var userName = 'Ivan';
// getBigName()
//   console.log(getBigName());

// выведет UNDEFINED. Т.к при вызове функции создалось лексическое окружение при котором  UNDEFINED


// 2. Какое значение вернет функция test? Почему?

// function test() {
// var name = 'Vasiliy';
// return getBigName(userName);
// }
// function getBigName(name) {
// name = name + '';
// return name.toUpperCase();
// }
// var userName= 'Ivan';
//  console.log(test());

// выведет IVAN т.к.  при вызове test он должен вернуть  getBigName(userName) 
// вызовется getBigName(name) с аргуменотом  userName= 'Ivan';


// 3. Что выведет функция getFood? Почему?
// var food = 'cucumber';
// (function () {
// var food = 'bread';
// getFood();
// })();
// function getFood() {
// console.log(food);
// }
// выведет cucumber т.к она обратится к глобальному окружени. а в нем food = 'cucumber';



// 1. Какое значение вернет функция getDollar? Почему?
// var dollar,
// getDollar;
// (function () {
// var dollar = 0;
// getDollar = function () {
// return dollar;
// }
// }());
// dollar = 30;
// console.log(getDollar());

//  getDollar выдаст 0  так как она его в окружениии на уровень выше 

// 2. Что будет выведено в консоль? Почему?
// var greet = 'Hello';
// (function () {
// var text = " World";
// console.log(greet + text);
// }());
//  console.log(greet + text);

//   выведет  Hello World  и text is not defined т.к. text локальная переменная  тут   text скрыто
    

// 3-. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // 6
// minus()(); // 0



// // 4+.Реализовать функцию, которая умножает и умеет запоминать
// // возвращаемый результат между вызовами:
// function MultiplyMaker(t){
//     return function(s){
//         t *= s;
//         return t;
//     }

// }
// const multiply = MultiplyMaker(2);
// console.log( multiply(2));
// console.log( multiply(1));
// console.log( multiply(3));
// console.log( multiply(10));




// 6-Создайте модуль “калькулятор”, который умеет складывать, умножать,
// вычитать, делить и возводить в степень. Конечное значение округлить
// до двух знаков после точки (значение должно храниться в обычной
// переменной, не в this)
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо
// округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100



//    var module = function(index){

//         const setIndex = value => index = value;
//         const plusFive = () => index += 5;
//         const minus = value => index -= value;
//         const multiply = () => index *= 2;
//         const output = () => index = Math.round((index) * 100 ) / 100;
//         const degree = value2 => index = Math.pow(index, value2);
       

//        return {
//             setIndex: setIndex,
//             plusFive,
//             multiply,
//             output,
//             degree,
//             minus 
           
//        }
    
//    }

// var counter = module();

//     console.log(counter.setIndex(10));
//     console.log(counter.plusFive());
//     console.log(counter.multiply());
//     console.log(counter.output()); 
//     console.log(counter.degree(2)); 
//     console.log(counter.minus(3)); 



// 5+ Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5



//    var module = function(string){

//         const setIndex = value => string = value;
//         const getIndex = () => string;
//         const getLength = () => string.length;
//         function rotate() {
//             var  d = '';
//             for (var i = string.length - 1; i >=0; i--) {
//              d += string[i];
//             }
//             return d;
//             }
    
//          function setIndex2(value) {

//              if (value == ''){
//                return   string = '';
//              } 
//               if (value){
//                return   string = value+'';
//              } 
//          }   
      
    
        
       

//        return {
//             setIndex: setIndex,
//             getIndex,
//             getLength,
//             rotate,
//             setIndex2
//        }
    
//    }

// var counter = module();
//     console.log(counter.setIndex2(10));
//     //  console.log(counter.setIndex('abc'));
//      console.log(counter.getIndex());
//      console.log(counter.getLength());
//      console.log(counter.rotate());
    


