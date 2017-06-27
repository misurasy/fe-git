//Dz date
// 1. done
// Написать функцию, которая принимает год, а возвращает день 1го
// января этого года. День должен быть в русском формате (например,
// для 2016 это будет “пятница”)
// function getWeekday(year){
//     var date = new Date(year, 0, 1);
//     var options = { weekday: 'long'};
// return date.toLocaleString('ru', options);
// }

// console.log(getWeekday(2016));


//3 done
// Узнать, сколько прошло полных недель с начала года (1го января
// 2016г.) до сегодняшней даты

// function   fullWeek(){
//     var now = new Date();
//     var oldDate = new Date(2017, 0, 1, 0, 0);  
//     var week = (now - oldDate) / 1000 / 60 / 60 / 24 / 7;
//         week = Math.round(week);
//     return console.log('1го января 2016г до сегодняшней даты прошло полных недель: '+ week);
 
//     }
// fullWeek();



// 2. done
// Написать функцию, которая принимает дату в виде строки
// “29.03.1985”, а возвращает день в русском формате (например, для
// указанной даты это будет “пятница”). Известно, что формат даты в
// строке всегда “дд.мм.гггг”.

// function formatDate(str){
//     var arr = [];
//     arr=str.split(',')
//     var date = new Date(arr[2], arr[1]-1, arr[0]);
//     var options = {weekday: 'long'};
// return date.toLocaleString('ru', options);
// }

// console.log(formatDate('29,03,1985'));