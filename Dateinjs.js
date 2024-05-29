//Date js start 1970

// let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let MyCreateDate = new Date(2023 , 0, 12)
let MyCreateDate = new Date(2023 , 0, 12, 3,4)



// console.log(MyCreateDate.toDateString());

// console.log(myDate.toString());

let myTimeStamp = Date.now()
// console.log(MyCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
// console.log(newDate.getDate());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('defailt',{
    weelday: "long" 
})