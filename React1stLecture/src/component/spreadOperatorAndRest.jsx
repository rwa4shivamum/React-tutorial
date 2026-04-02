
export function SpreadRestOperator () {
    const fruits = ["mango", "banana"]
    const newFrutis = [...fruits, "pineapple", "kiwi", "strawberry"] // ["mongo", "banana"]

    const [firstFruit, secondFruits, ...restFruits ] = newFrutis
    return(
    <>
    <h1>Hello, From Rest and Spread operator</h1>
    <h1>Here is my first fruits{firstFruit}</h1>
    <h1>here is secondFruits {secondFruits}</h1>
    {restFruits.map((item, index)=>(
        <h1>{item}</h1>
    ))}
    </>
    )
}