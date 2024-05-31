// Array 
// Colletion of items


let marks = [23,5,6,32,44,6,];
console.log(marks[2]);
marks[2]=66;
console.log(marks.length); // property

let heros=["ironman", 'thor',"hulk"]

console.log(heros.length);


// looping over in Array

// for loop useing
// let heroes=["ironman", 'thor',"hulk","shaktiman",]
//  for (let i = 0; i<hero.length; i++){
// console.log(hero[i]);
//  }

// // for of
// for (let hero of heroes) {
//     console.log(hero);
// }

let cities = ["delhi", "pune","mimbai","gurgaon"];

// for (let city of cities ) {
//     console.log(city.toUpperCase());
// }


// //  Qs 1.....
// let Arr1 =[23,76,45,87,23,56,76];
// let sum =0;

// for(let val of Arr1) {
//     sum += val;
// }
// let avg = sum / Arr1.length;
// console.log(`avg marks of the class ${avg}`);

// Qs 2......



// for loop 
// let items = [234,543,657,689,654,235]
// for ( let i =0; i<items.length;i++){
//     let offer = items[i] /10;
//     items[i] -= offer;
// }
// console.log(items);

// Array methods

// push()  Add to end

let foods =["apple","banana","litchi","orange",]
// foods.push("chips","burger")
 console.log(foods);

//  pop()  end item delete
 console.log(foods.pop());
 console.log(foods.toString());



 // concat...  joins multiple  array & retult
 let newArr = cities.concat(foods)
 console.log(newArr);

 // unsift() ==== add to start
// shift()        detele to start
 foods.unshift("graps")
 foods.shift("graps")


 // slice() return a piece of the Array 
 let num =[1,2,3,4,5,6]
 num.slice(1,3);



 // splice() change original Array (add, remove, replace) (start,delete,newadd)

//  num1.splice(2,0,8,9);

 //practice Qs..


  let company = ["facebook", "uber","IBM","Netfkix","Google"];
//   company.shift(1);  /* start delete   */
  company.slice(2,1,"ola")