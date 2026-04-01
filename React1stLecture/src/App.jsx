function App() {
  const name = ["tirth", "druv", "arpit", "juber", "juhed", "hetakshi", "mohiyudin"]
  const fruits = ["mango", "apple", "kiwi", "pineapple", 'orange'];
  const students = [
  { id: 1, name: "Aarav", age: 20, grade: "A" },
  { id: 2, name: "Isha", age: 21, grade: "B" },
  { id: 3, name: "Rohan", age: 19, grade: "A" },
  { id: 4, name: "Meera", age: 22, grade: "C" },
  { id: 5, name: "Kunal", age: 20, grade: "B" },
  { id: 6, name: "Sneha", age: 21, grade: "A" },
  { id: 7, name: "Arjun", age: 23, grade: "B" },
  { id: 8, name: "Priya", age: 20, grade: "A" },
  { id: 9, name: "Rahul", age: 22, grade: "C" },
  { id: 10, name: "Neha", age: 19, grade: "B" }
];
  const filterdFruits = fruits.filter((item)=>{
    return item.includes("a")
  })
  console.log(filterdFruits)//["mango", "apple", "pineapple", 'orange']
  return (
   <>
   <h1>Show Name</h1>
   <ul>
    {name.map((item, index)=>(
      <li>Name:{item}</li>
    ))}
   </ul>
   <h1>Show Fruits</h1>
   <ol>
    {filterdFruits.map((item, index)=>(
      <li>fuiteName:{item}</li>
    ))}
   </ol>
   <h1>Students</h1>
   <ol>
    {students.map((item)=>(
      <li key={item.id}>StudentName: {item.name}; age: {item.age}; grade:{item.grade}</li>
    ))}
   </ol>
   </>
  )
}

export default App
