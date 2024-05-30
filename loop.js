for( let i=1; i<=100; i++){
    console.log(i);
}

let i=1;
while(i<=5){
    console.log("avi",i);
    i++;
}

let i=1;
do{
    console.log("avinash",i);
    i++
}while(i<=5)
extit cotrol loop


let i=1;
 do{
     console.log("avinash",i);
     i++
 }while(false)


 breck and continue


for(let i=1;i<=5;i=i+1){
    for(let j=1;j<=5;j=j+1){
    console.log(i,j);
break;
}
    
}


let i=1;

while(i<=5){
for(let j=1;j<=7;j++){
    for(let k=1;k<=9;k++){
        console.log(i);
        break;
    }
}
}

continue

for(let i=1; i<=9; i++){
    console.log("name",i);
    if ( i==2){
        continue;
    }
    console.log("chale raho");
    console.log("chlo");
}


for ( let i=1; i<=5; i++){
    console.log("hey",i)
   break;
    
}

odd even number

for(let num=1; num<=10; num++){
    if(num%2==0){
        console.log("even",num);
    } 
    else{
        console.log("odd",num);
    }
}

let num=10;
let count=0;
for(let div=2;div<=num-1; div++){
    if (num%div==0){
        count++;
        break;
    }
}
if (count>0){
    console.log(" prime",num);
}else{
    console.log(" not prime",num);
}


let low=10;
let uper=100;
for(let i=low;i<=uper;i++){
    let count =0;
  for( let div=2; div<=i-1;i++){
    if(i%div==0){
        count++;
        break;
    }
  }
  if(count>0){
    console.log("not prime",i);
  }else{
    console.log("prime",i);
  }
}

const data = [
    { name: 'John', age: 25, country: 'USA' },
    { name: 'Alice', age: 30, country: 'Canada' },
    { name: 'Bob', age: 22, country: 'UK' },
    { name: 'Emily', age: 35, country: 'Australia' }
  ];
  
  // Function to filter the array of objects based on criteria using map() and filter()
  function filterData(array, criteria) {
    return array.map(item => {
      // Check if all key-value pairs in criteria match with item
      for (let key in criteria) {
        if (item[key] !== criteria[key]) {
          return null; // If any criteria doesn't match, return null
        }
      }
      return item; // If all criteria match, return the item
    }).filter(item => item !== null); // Filter out null values
  }
  
  // Example usage:
  const filteredData = filterData(data, { country: 'USA', age: 25 });
  console.log(filteredData);


for(let i=1; i<=100; i++){
    
console.log("avi",i);
}

let i=1;
while (i<50) {
    console.log("avinash");
    i=i+1;
}

Do while loop ===> exit control loop
let i=1;
do{
    console.log("Avinash");
    i++;
}while(false)


    for(let i=1; i<=10; i++){
        console.log(i);
        break;
    }

    console.log("loops se bahar");

    for(i =1; i<=5; i++){
        for(j=1;j<=4; j++){
            console.log(i,j);
            break;
        }
    }

    let i=1;
    while(i<=10){
        for(let j=1;j<=5;j++){
        for(let k=1;k<=13;k++){
            
                console.log(i,k,j);
                break;
            }
        }i++;
    }
    

    console.log("loop");


    Continue

    // iterstion skip krta hai


    for( let i =1; i<= 5; i++){
        console.log("loop" , i)
        if(i==2){
            console.log("breck");
            continue;
        }
        console.log("Hey");
    }


    for(let num=1;num<=10;num++){
        if(num%2==0){
            console.log("even",num);
        }
        else{
            console.log("Odd");
        }
    }

    let num= 7;
    let count =0;
    for(let div=1;div<=num-1;div++){
        if(num%div==0){
            count++;
            break;
        }
    }
    if(count==0){
        console.log("not prime",num);
    }else{
        console.log("prime",num);
    }

    let ll = 10;
    let ul = 100;

    for ( let num=11;num<=ul;num++){
        let count =0;
        for (let div=2; div<=num-1;div++){
            if(num%div==0){
                count++;
                break;
            }
        }
    }
    if(count>0){
        console.log("not prime",num);
    }else{
        console.log("prime",num);
    }