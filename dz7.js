//Dz date
// 1. done
// �������� �������, ������� ��������� ���, � ���������� ���� 1��
// ������ ����� ����. ���� ������ ���� � ������� ������� (��������,
// ��� 2016 ��� ����� ���������)
// function getWeekday(year){
//     var date = new Date(year, 0, 1);
//     var options = { weekday: 'long'};
// return date.toLocaleString('ru', options);
// }

// console.log(getWeekday(2016));


//3 done
// ������, ������� ������ ������ ������ � ������ ���� (1�� ������
// 2016�.) �� ����������� ����

// function   fullWeek(){
//     var now = new Date();
//     var oldDate = new Date(2017, 0, 1, 0, 0);  
//     var week = (now - oldDate) / 1000 / 60 / 60 / 24 / 7;
//         week = Math.round(week);
//     return console.log('1�� ������ 2016� �� ����������� ���� ������ ������ ������: '+ week);
 
//     }
// fullWeek();



// 2. done
// �������� �������, ������� ��������� ���� � ���� ������
// �29.03.1985�, � ���������� ���� � ������� ������� (��������, ���
// ��������� ���� ��� ����� ���������). ��������, ��� ������ ���� �
// ������ ������ ���.��.����.

// function formatDate(str){
//     var arr = [];
//     arr=str.split(',')
//     var date = new Date(arr[2], arr[1]-1, arr[0]);
//     var options = {weekday: 'long'};
// return date.toLocaleString('ru', options);
// }

// console.log(formatDate('29,03,1985'));