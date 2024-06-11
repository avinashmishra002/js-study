const nums= [1,2,3,4,5,6];

const multy = nums.map((num,i,arr)=>{
    return num*3 + i;
})

console.log(multy);

const nums= [1,2,3,4,5,6];

const fltr = nums.filter((num,i)=>{
return num > 2 + i;
})
console.log(nums);


const nums= [1,2,3,4,5,6];

const rduce =nums.reduce((acc,curr,i,arr)=>{
  return acc + curr ;
},0)
console.log( rduce);



map ,filter , reduce
polifill for map()

Array.prototype.mymap=function (cb){
let temp = [];
for (let i = 0; i < this.length; i++) {
    temp.push (cb (this[i],i,this))
    
}
return temp;
};
// custum map
const nums= [1,2,3,4,5,6];

const multy = nums.mymap((num,i,arr)=>{
    return num*3 + i;
})
console.log(multy);


polyfill filter


Array.prototype.myfilter = function (cb){
  let temp = [];
  for(let i = 0; i < this.length; i++){
    if(cb(this[i],i, this)) temp.puch(this[i]);
    
  }
  return temp;
};
    
const nums= [1,2,3,4,5,6];

const multy = nums.myfilter((num)=>{
    return num > 2 ;
});
console.log(multy);


polyfil reduce

arr.reduce((acc, curr,i,arr)=>{},initialvalue)

Array.prototype.myReduse = function (cb ,initialvalue){
  var accumulator = initialvalue;

  for(let i = 0; i <this.length; i++ ){
    accumulator = accumulator? cb(accumulator,this[i],i,this): this [i];
  }

  return accumulator;
};
const nums= [1,2,3,4,5,6];

const sum = nums.myReduce((acc,curr,i,arr)=>{
  return acc + curr ;
},0)
console.log(sum);


const arr = [ 2,3,4,5,6];

const mapReturn =arr.map((ar)=>{
    return ar + 2;
})

const forEachReturn = arr.forEach((ar,i)=>{
    arr[i]= ar + 4;
})
console.log(mapReturn,forEachReturn,arr);