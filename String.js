const myname = 'Avi'
const age = 23

// console.log(myname + age + "value");

// console.log(`hello my name  is ${myname} an iam ${age} old`);


const fullname = new String (`avinashmishra`)

// console.log(fullname[0]);
// console.log(fullname.__proto__);

// console.log(fullname.length);

// console.log(fullname.toUpperCase());


// console.log(fullname.charAt(1));

console.log(fullname.indexOf("a"));

const newString = fullname.substring(0,7)
console.log(newString);

const ScString = fullname.slice(-9,8)
console.log(ScString);

let newStringone ="   Avinash  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://avinash.com/avi%2mishra"

console.log(url.replace('%2','_'))

console.log(url.includes('avi'))

console.log(fullname.split('__'));