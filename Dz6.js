
// dz 4+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. done2
// ������ ������� �� 11� ������ ������ � 7 ��������� �  �������������� filter() (������ �����)


// let product22 = [
//  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
//  ];

// function funk1(products, a, b){ 
//     var   newarr = products.filter(function (element) {
//         return  element.price<=b && element.price>=a
        
//      });
//      return  newarr.sort( function (prev, next) {
//         if (prev.price < next.price) return -1;
//         if (prev.price > next.price) return 1;
//         });
//   }

//  let res = funk1(product22, 15, 19 );
//  console.log(res);
  
 
// 3. done2
// ���������, �������� �� ������ [12, 4, 50, 1, 0, 18, 40] ��������,
// ������ ����. ���� �� - ������� false


// var status =  [12, 4, 50, 1, 0, 18, 40].every(function (element) {
//     return element !== 0;
//    });
   
//    console.log(status);



//   4. done2
// ���������, �������� �� ������ ['yes', 'hello', 'no', 'easycode', 'what']
// ���� �� ���� ����� ������ ������ 3� ����. ���� �� - ������� true

// var status =  ['yes', 'hello', 'no', 'easycode', 'what'].some(function (element) {
//     return element.length > 3;
// });
    
// console.log(status);



// 2. done2
//  �� ������ ������� [1,2,3,5,8,9,10] ������������ ����� ������,
// ������ ������� �������� ����� ������� ���������� � ����� � ���
// ��������:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]


// var numbers = [1,2,3,5,8,9,10];
// var doubles = numbers.map(function(element) {
 
//      return {digit: element, odd: Boolean(element % 2) } 
// });
// console.log(doubles);


//5
// 5. ��� ������ ��������, ��� ������ ������ �������� ���������� �
// ����� � ����� � ��������� � ������ {�����: �a�, �������_�_�����������:
// // 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// �������� �������, ������� �� ��������� ������� ������� � �����
// ������, ����������� �� index ������ �����. ��������:
// [{char:"i",index: 1}, {char:"H",index:0}, {char:"!",index:2}] > �Hi!�
// ���������: ������� ������������ ������ �� index, ����� ����������� reduce() ��� ����������
// ������
// ��� ����� ������ ��� �� ������, �� ��������� ���������� � reduce()?

//5.1----------------------------------------
// var numbers =  [{char:"i",index: 1}, {char:"H",index:0}, {char:"!",index:2}];

// var numbers = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

// var  newarr =[];
// var  s ;
//   newarr = numbers.sort( function (prev, next) {
//          if (prev.index < next.index) return -1;
//          if (prev.index > next.index) return 1;
//         });

// s= newarr.reduce(function(sum, current) {
//   return sum + current.char;
// },'');

//  console.log(s);

//5.2----------------------------------------

//// var numbers =  [{char:"i",index: 1}, {char:"H",index:0}, {char:"!",index:2}];
// var numbers = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];
// var  newarr =[];
// var  newarr2 =[];
 
 
//  function SortIndex(arr)   {
//     var n = arr.length;
//     for (var i = 0; i < n-1; i++)
//      {for (var j = 0; j < n-1-i; j++)
//         {if (arr[j+1].index < arr[j].index)
//            {var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;}
//         }
//      }                     
//     return arr;    
// }
// newarr = SortIndex(numbers);
        

//  var  str;
//     for (let i=0, len = newarr.length; i<len; i++){
//         newarr2.push(newarr[i].char);
//         str= newarr2.join('') ;
//    }
//     // console.log(newarr2);
//     console.log(str);