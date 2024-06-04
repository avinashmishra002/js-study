// function  -->  block of code that performs a aspecific task , can be invocked whenever needed

function myfun(){
    console.log("satrt function");
    console.log("an i learn js ");
}
myfun();
myfun();

function fun(a,n) {  
    //perameter -->input
    console.log(a + n);
    
}
fun(5,10); // argument


// function -> 2 Number , sum
function sum (x,y){
    // local varivables -> scope
    s = x * y;
    return s;

}
let val =sum(4,5);
console.log(val);


// Arrow function -> compact way of writing a function 

// sum function
let arrowsum=(a, b)=>{
console.log(a + b);
}
arrowsum( 2 ,3 );


let mul=(c , d)=>{
    console.log(c*d);

}
mul( 5 , 10);

//Qs 
// function countVowels(str) {
//     let count = 0;
//     for( let i of str){
        
//             if ( i === "a" 
//                 || i === "o"
//                  || i === "i" 
//                ||i ==="e"
//                ||i ==="u")
//                 {
//                 count++;

//             }
//         }
//        return count; 
// }
    
//Arrow finction

const countVow =(str)=>{
let count = 0;
for (const char of str){
    if (char === "a" 
    || char === "o"
     || char === "i" 
   ||char ==="e"
   ||char ==="u")
   {
    count++;
   }
}
return count;
}
countVow("abcd");


//forEach loop in Array

//arr.forEach(callbackFuction)

// let arr = [1,2,3,4,5,"avi" ,true]
// arr.forEach( function printVal (val){
//     console.log(val);
// })

let arr = [1,2,3,4,5]  
arr.forEach( (val,i , arr)=>{
    console.log(val, i ,arr);
})

// velue , index , arr

//Qs  Square

let nums = [2,4,5,6,7]

nums.forEach((nums)=>{
    console.log(nums*nums);  //**2 
})

//Array Methods
//  Map

let arrm = [34,65,76,44];

// arrm.map((val)=>{
//     console.log(val);
// })

let newArr = arrm.map((val)=>{
    return val* val;
})
console.log(newArr);


// filter Methode
// create new array
let Arr = [2,4,6,7,8];

let evenArray =Arr.filter((val)=>{
return val%2===0;

})
console.log(evenArray);


let marks = [54,67,54,88,66,98];
let toppers = marks.filter((val)=>{
    return val > 80;
})

console.log(toppers);


// Reduce   

// let Rarr = [1,2,3,4,5];

// let output = Rarr.reduce((res,curr)=>{
//     // return res + curr;
//     return res > curr ? res : curr;    // big Numver
// })
// console.log(output);


// Qs
let n = prompt("Enter a number :")
let Arry = [];

for ( let i = 1; i <= n; i++){
    Arry[i-1] = i;
}
console.log(Arry);

let Add = Arry.reduce((res,curr)=>{
    return res + curr;
})

console.log("sum",Add);

// let foctorial =Arry.reduce((res , cuur)=>{
//     return res * curr;
// })

// console.log(foctorial);