
let str = "Avinash"
console.log(str[0]);  // index =0

// Template Litrals

let SpecialString = `this is a tamplate literal`;
console.log(SpecialString);
console.log(typeof SpecialString);



let obj = {
    item: "pen",
    price: 10
}
// console.log("the cost of ",obj.item,"is" , obj.price,"rupees");

console.log(`the cost of ${obj.item} is ${obj.price} rupees`);


// escape 
console.log("Avinash\nmishra");
console.log("Avinash\tmishra");  
let str1 = "Avinash\tmishra";
console.log(str1.length);


let str2 = "Avinash";
console.log(str2.toUpperCase());
console.log(str2.toLocaleLowerCase());

let str3 = "   Avinah mishra  "
console.log(str3.trim());

let str4 = "Avinah mishra"
console.log(str4.slice(2,7));

let str5 = "Avinah "
let str6 = "Mishra"
// let res = str5.concat(str6);
let res=  str5+str6+str2;
console.log(res);



let str8 = "HeHello";
// console.log(str7.replace("lo","p"));
console.log(str8.replaceAll("He","YEllO"));

let str0 ="Javascript"
// console.log(str0.charAt(2));

str0 = str0.replace("J","L")
console.log(str0);


// Qs1

let fullName = prompt ("enter your fullname without spaces");
let userNmae ="@"+fullName.length;
console.log(fullName);





