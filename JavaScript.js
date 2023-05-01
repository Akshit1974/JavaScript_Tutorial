// var a = 67;
// var b = 90;

// console.log(a, b);

// // var c = b;
// // b = a;
// // a = c;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`Value of a = ${a}`);
// console.log(`Value of b = ${b}`);

// var num1 = 5;
// var num2 = 5;

// console.log(typeof( num1));
// console.log(typeof( num2));
// console.log(num1 === num2);
// console.log(10**2 -1)

// var age = 18;
// console.log((age >= 18) ? "Vote" : "Not Vote")

// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;

// if(area=="circle"){
//     console.log(`The area of Circle is : ${PI*r**2}`);
// }

// var num = 0;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }
// do{
//     debugger
//     console.log(num);
//     num++;
// }while (num <= 10)

// for (var num = 1; num <= 10; num++) {
//     var tableOf = 95;
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }

// function sum(a,b) {
//     var total = a+b;
//     console.log(total);
// }
// sum(100,10)

// function BioData() {
//     let firstName = "Akshit";
//     if (true) {
//         console.log(firstName)
//         if(true){
//             console.log(firstName)
//         }
//     }
//     console.log(firstName)
// }

// BioData();
// var name1 = ['Akshit', 'BharatBhai'];
// for (var i = 0; i < name1.length; i++) {
//     console.log(name1[i]);
// }

// for(let elements in name1){
//     console.log(elements)
// }

// for(let elements of name1){
//     console.log(elements)
// }

// name1.forEach((element,index,array) => {
//     console.log(element,index,array)
// });

// var name1 = ['Akshit', 'BharatBhai'];

// console.log(name1)
// console.log(name1.shift());
// console.log(name1)

// const data = [
//     { id: 1, name: 'Akshit' },
//     { id: 2, name: 'HanumanDada' },
//     { id: 3, name: 'Laxam' },
//     { id: 4, name: 'Ram' },
// ];

// const newData = data.map((i) => {
//     return `My name is ${i.name}`
//     // console.log(`My name is ${i.name}`)
// }); 
// console.log(newData);    

// var name1 = ['Akshit', 'BharatBhai','HanumanDada'];

// const newName = name1.splice(0,1,"akshit")

// console.log(name1)


// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let array2 = array1.map((element, index, arr) => {
//     return element > 5
// })
// console.log(array1)
// console.log(array2)

// let newArray = array1.map((element, index, arr) => {
//     return `Index no = ${index} and the value is ${element} belong to ${arr}.`
//     // console.log(`Index no = ${index} and the value is ${element} belong to ${arr}.`)
// });
// console.log(newArray)

// let Arrays = [22, 36, 49, 64, 81];

// let newArray = Arrays.map((element) => element * 2).filter((element) => element > 10);
// console.log(newArray);

let Arrays = [22, 36, 49, 64, 81];

let newArray = Arrays.reduce((accumulator, element, index, arr) => {
    debugger;
    return accumulator *= element
});
console.log(newArray)
