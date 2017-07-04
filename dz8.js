
//dz this===============================================================================
// 1 done


// const rectangle = {
//     width: 10,
//     height: 12,
//     getSquare: getSquare
// };

// function getSquare() {
//     return this.width*this.height;
// }

// console.log(rectangle.getSquare());




// //  2 done
//  const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: getPrice,
//     getPriceWithDiscount: getPriceWithDiscount
// };

//  function getPrice() {
//     return this.price;
//  }
//  console.log(price.getPrice());
    
// function getPriceWithDiscount() {
//     return (100-parseFloat(this.discount))/100*this.price ;
//  }
// console.log(price.getPriceWithDiscount());




// 3 done
// const user = {name: 'Abraham',
//              getName: getName   
//             };

// function getName(){
//     return this.name 
// } 
// console.log(user.getName());


// 4 done
// const obj = {height: 15,
//             getIncH: getIncH   
//              };
           
// function  getIncH(){
//      return ++this.height 
// } 
// console.log(obj.getIncH());
// console.log(obj.height);


//5 done
// const numerator = {
//         value: 1,
//         double: double,
//         plusOne: plusOne,
//         minusOne: minusOne
//     };
    
//  function  double(){
//       this.value *=2;
//       return this 
//  } 
  
//  function  plusOne(){
//     ++this.value;
//     return this 
//  }
  
//  function  minusOne(){
//     --this.value;
//     return this 
//  }  

//   console.log( numerator.double().plusOne().plusOne().minusOne());
    



//  6 done

// const user = {name: 'Abraham'},
// otherUser = {
//     name: 'John',
//     getName: function(){return this.name;}
// }
//       console.log(user.getName); // это метод не определен для этого объекта

//       user.getName = otherUser.getName; // добавили метод в объект

//       console.log(user.getName()); // вызвали метод и получили поле для user
//       console.log(otherUser.getName()); //  вызвали метод и получили поле для  ОtherUser




//1 done
// function  getList(){return this.list;}  
// let users = {
//     lenght: 4,
//     list: ['Abraham', 'James', 'John', 'Steven']
// }

// //  console.log(getList()); // не может проччитать поле LIST оно не определено

// //  users.getList = getList; //добавили метод в объект
// //  console.log(users.getList()); // вызвали метод и получили поле list

// console.log(getList.call(users)); // вызвали метод getList через call для users  и получили поле list


//2 done
// let obj = {price: 10,
//            quantity: 2,
//            getVolume: getVolume
// }
// function  getVolume(){return this.price*this.quantity;}

//  console.log(obj.getVolume());

 //3 done
//  let obj1 = {price: 10,
//            quantity: 2,
//            getVolume: getVolume
// }
// function  getVolume(){return this.price*this.quantity;}


// let obj2 = {price: 20,
//            quantity: 5,
//            getVolume: getVolume
// }
// console.log(getVolume.call(obj2)); 


 //4 done
// let sizes = {width:5, height:10}

// function getSquare(){return this.width * this.height;}

// console.log(getSquare.call(sizes)); 

//5 done
//  let numbers = [4, 12, 0, 10, -2, 4];

//  console.log(Math.min.apply(null, numbers));

//6 done
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function(){
         return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
        }
};

console.log(element.getFullHeight());

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '5px',
};

console.log(element.getFullHeight.call(block)); 


// // const element = {
// //     height: '15px',
// //     marginTop: '5px',
// //     marginBottom: '5px',
// //     getFullHeight: getFullHeight
// // };
// // function getFullHeight(){
// //          return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
// //         };

// // console.log(element.getFullHeight());





//7 done
// let element = {
//     height: 25,
//     getHeight: function(){ return this.height;  }
// };
// let getElementHeight = element.getHeight;
// //  console.log(getElementHeight());

//  getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight());