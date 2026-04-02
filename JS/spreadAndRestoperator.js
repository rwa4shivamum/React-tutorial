//Rest and spread operator


//spread = open the box 
//rest = collect remaining items 
//...

// const numbers = [1,2,3];
// const number2 = [9,10,11,12]
// //spread operators
// const newNumber = [...numbers, 4,5,6,7,8,...number2, numbers] //[1,2,3,4]
//golden
//     rest     =     spread

// const arrRest = [1,2,3,4]
// const [second] = arrRest  
// //    [1, [2,3,4]]    
// console.log(first) // 1
// console.log(rest) // [2,3,4]


const fruits = ["apple", "mango", "kiwi"];
const newFruits = [...fruits, "banana"] //spread is use for adding the element
const [first,second, ...restFruits ] = newFruits

//const first = "apple", const second = "mango"
console.log("here is the first fruit",first)
console.log("here is the secondFruits",second);
console.log("here is the reamining fruits", restFruits)
// for(let i=0; i<fruits.length; i++){
//     newFruits.push(fruits[i])
// }
// newFruits.push("mango")
console.log(newFruits)