// dz_________________________________________________________________________________________
// 1.+
// ������� ����������� ��� ������������ �����������. �����������
// ������ ��������� ����� ���������� � ������� ������.
// ����������� ������ ����� �����, ������� ���������� �����, �
// ������ �����, ������� ���������� ��� ������������ ������ (���
// ������� ����� ������� ������, ������������ Date ��� ���������
// �������� ����)
// ...
// var lexus = new Car(�lexus�, 2);
// lexus.�������������(); // �Lexus�
// lexus.������������������(); // 2014 (2016-2);

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

// 2. �������� �����������, ������� ����� ����������� ���������
// ������ (��������, ������� �� ������ ������-����������, ���
// �������� ��� ������� �� �������� ��������������, ��� �����
// ������ �����). ����������� ��� ������������� �������� ������ �
// ����� ��������� ������:
// a. �������� ������������ ������
// b. �������� ������������� ������
// c. ������� ��� ������ - ����� ������ ������� ��� ������
// ������ �� ������ ���� �������� ����� this, ������ � ������� �������

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
// ������� �����, ������� ������� ����������, ���������� �� �������
// � ����� ��������� �������� � ������:
// a+. �������� �������� ����� ��������� ������
// b+. ������ ��� ��������� � ��������� ������
// c+. ����� ��� ��������� ����� ������
// d. ��� ������ toString() ������� ������
// e. ��� ���������� ������� � ����� ������� ����� ������
// var str = new �����������(�test�);
// str.��������(); // �test�
// +str; // 4
// str.toString(); // �test�    


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
