// 1 Primitive 

 // 7 types: String , Number , Boolean , null , undefined , Symbol , Bigint

 const score = 100;
 const scoreValue = 10;

 const isLoggedId = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol("123")
 const anotherId = Symbol("123")

 console.log(id === anotherId);

 const bigNumber = 23423498349857n

 // Reference (Non primitive)

 // Array , Objects , Funtions

 const heros = ["shaktiman","Don" , "krish"]

 let myobj={
    name: "Avinash",
    age : 23

 }

 let  myfuc= function() {
    console.log("hello world");
    
 }
 console.log(typeof myfuc);


//  memory
 //1 - stark (Primititve)  , Heap (Non primitive)
 // 

 let username = 'Avinash'
 let anothername = username

 anothername = "mishra"

  console.log(anothername);
  console.log(username);

  let userOne={
    email: "user@google.com",
    upi: "user@ybl"
  }
  let userTow =userOne
   userTow.email= "avinash@mail.com"

   console.log(userOne);
   console.log(userTow);