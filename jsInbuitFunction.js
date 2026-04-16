//**********************************Map
const arr = [1,2,3,4,5];

// const arr2 = [];

// for(let i=0; i<=arr.length-1; i++){
//     arr2.push(arr[i]*2)
// }

// console.log("here is arr2",arr2)
// console.log("here is array1",arr)

const arr2 = arr.map((item)=>{
    return item*2
})

console.log("array1 here",arr)
console.log("array2 here",arr2)

//*****************************Filter*****************/
const arrfilter = [1,2,3,4,5,6,7,8]

// const evenArray = [];

// for(let i=0; i<=arrfilter.length-1; i++){
//     if(arrfilter[i] % 2 == 0){
//         evenArray.push(arrfilter[i])
//     }
// }

// console.log("here is mu evenArray",evenArray)
// console.log("here is my arrfilter", arrfilter)

const filtereven = arrfilter.filter((item)=>{
    if(item % 2 == 0){
        return item
    }
})

console.log("HERE IS FILTER EVEN USING FILTER",filtereven)
console.log("jhere is normal array", arrfilter)

// //spread operator
// const 

let date = Date.now()
let realDate = new Date(date)
console.log(realDate.toString())