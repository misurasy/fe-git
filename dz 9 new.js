// dz+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. ��� ������� ��������� ���? ������?
// getBigName(userName);
  
// function getBigName(name) {
// name = name + '';
// return name.toUpperCase();
// }
// var userName = 'Ivan';
// getBigName()
//   console.log(getBigName());

// ������� UNDEFINED. �.� ��� ������ ������� ��������� ����������� ��������� ��� �������  UNDEFINED


// 2. ����� �������� ������ ������� test? ������?

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

// ������� IVAN �.�.  ��� ������ test �� ������ �������  getBigName(userName) 
// ��������� getBigName(name) � �����������  userName= 'Ivan';


// 3. ��� ������� ������� getFood? ������?
// var food = 'cucumber';
// (function () {
// var food = 'bread';
// getFood();
// })();
// function getFood() {
// console.log(food);
// }
// ������� cucumber �.� ��� ��������� � ����������� ��������. � � ��� food = 'cucumber';



// 1. ����� �������� ������ ������� getDollar? ������?
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

//  getDollar ������ 0  ��� ��� ��� ��� � ���������� �� ������� ���� 

// 2. ��� ����� �������� � �������? ������?
// var greet = 'Hello';
// (function () {
// var text = " World";
// console.log(greet + text);
// }());
//  console.log(greet + text);

//   �������  Hello World  � text is not defined �.�. text ��������� ����������  ���   text ������
    

// 3+. �������� ������� ������� �� ����� ������:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // 6
// minus()(); // 0


// function minus(a=0) {
//   var res = function(b=0) {
//     var resa,  resb;
//     resa = a;
//     resb = b;
//     return resa - resb;
//    };
//     return res;
//   }

//   console.log(minus(10)(6));
//   console.log(minus(5)(6));
//   console.log(minus(10)());
//   console.log(minus()(6));
//   console.log(minus()());


// // 4+.����������� �������, ������� �������� � ����� ����������
// // ������������ ��������� ����� ��������:
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




// 6-�������� ������ ������������, ������� ����� ����������, ��������,
// ��������, ������ � ��������� � �������. �������� �������� ���������
// �� ���� ������ ����� ����� (�������� ������ ��������� � �������
// ����������, �� � this)
// ������.������������������(10); // �������� = 10
// ������.���������(5); // �������� += 5
// ������.��������(2); // �������� *= 2
// ������.��������������(); // ������� � ������� 30 (����� ����
// ���������)
// ����� ����� �������� ������ ��������:
// ������.������������������(10).��������(2).��������������(); // 100



   var module = function(){
    var index;
       
        function setIndex(value) {index = value; return this  };
        function plusFive(value) {index += 5; return this  };
        function minus(value) {index -= value;; return this  };
        function multiply(value) {index *= 2; return this  };
        function degree(value2) {index = Math.pow(index, value2); return this  };
        const output = () => index = Math.round((index) * 100 ) / 100;
    
       

       return {
            setIndex: setIndex,
            plusFive,
            multiply,
            output,
            degree,
            minus 
           
       }
    
   }

var counter = module();
     console.log(counter.setIndex(10).multiply().degree(2).output());
    // console.log(counter.setIndex(10));
    // console.log(counter.plusFive());
    //  console.log(counter.multiply());
    // console.log(counter.output()); 
    // console.log(counter.degree(2)); 
    // console.log(counter.minus(3)); 





// 5+ ����������� ������, ������� �������� �� ������� � ����� ������:
// a. ���������� ������
// i. ���� �������� ������ ��������, �� ���������� ������ ������
// ii. ���� �������� �����, ����� �������� � ������
// b. �������� ������
// c. �������� ����� ������
// d. �������� ������-����������
// ������:
// ������.����������������(�abcde�);
// ������.��������������(); // �abcde�
// ������.�������������(); // 5



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
    




