//slice
const arr = [10,20,30,40,50, 60];
//           0   1  2  3  4  5
let result = arr.slice(1, 4)
//           slice(startIndex, endIndex)
//           startIndex = result included
//           endIndex = not included in result
console.log(result)


//arr.splice(startIndex, deleteCount, 20, 30, 40)
const arr1 = [10, 20, 30, 40, 50, 60, 70]
arr1.splice(1,3,...arr);
console.log(arr1)


let person1 = {
    name:"shivam",
    age:23
}

console.log(Object.keys(person1))//[ 'name', 'age' ]
console.log(Object.values(person1))
console.log(Object.entries(person1))
console.log(person1)

let user = {name:"john", age:25};

let copy = {...user, address:"123/street"};

console.log(copy)
console.log(user)