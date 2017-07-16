// dz_________________________________________________________________________________________
// 1.+
// —оздать конструктор дл€ производства автомобилей.  онструктор
// должен принимать марку автомобил€ и возраст машины.
//  онструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год
// текущий минус возраст машины, использовать Date дл€ получени€
// текущего года)
// ...
// var lexus = new Car(СlexusТ, 2);
// lexus.получитьћарку(); // УLexusФ
// lexus.получить√од¬ыпуска(); // 2014 (2016-2);

// function Car(info, age) {
//     this.name =  info.charAt(0).toUpperCase() + info.substr(1) || 'car';
//     this.age = age || 'empty';
//     this.getName = () => this.name;
//     this.getCarYear = () => this.age;
//     this.getCarYear = () => {
//         if(this.age === "empty") return console.error('Empty age');
//         var date = new Date();
//         return date.getFullYear() - this.age;
//     };
// }




//   var some_car = new Car ("lexus", 4);   

// 2. Ќаписать конструктор, который умеет элементарно шифровать
// строки (например, сделать из строки строку-перевертыш, или
// заменить все символы их цифровым представлением, или любой
// другой метод).  онструктор при инициализации получает строку и
// имеет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// c. стереть все данные - метод должен удалить все строки
// —троки не должны быть доступны через this, только с помощью методов

 function Constr(str) {
       var  d = '';
    
      this.getStr = () => str;
      this.getSecurity = function () {
     
            for (var i = str.length - 1; i >=0; i--) {
             d += str[i];
            }
            return d;
         };
      this.remStr = function () {d= '';  return str = ''; };
};

    var some_str = new Constr ("xus");    


// 3.
// —оздать класс, который создает экземпл€ры, работающие со строкой
// и имеет следующие свойства и методы:
// a+. свойство УстрокаФ будет содержать строку
// b+. методы дл€ получени€ и установки строки
// c+. метод дл€ получени€ длины строки
// d. при вызове toString() вернуть строку
// e. при приведении объекта к числу вернуть длину строки
// var str = new  ласс—трока(СtestТ);
// str.получить(); // СtestТ
// +str; // 4
// str.toString(); // СtestТ    


// class Str{
//     constructor(str){
//         this.str = str;
//     }

//     getStr(){
//        return  this.str;
//     }
//     setStr(value){
//         return this.str = value;
//     }
//      getStrLenght(){
//         return this.str.length;
//     }
//     toString(){
//         return  this.str;
        
//     }
//      valueOf(){ return this.str.length};
// }
// var myStr = new Str('10');
