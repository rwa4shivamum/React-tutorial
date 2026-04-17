import "./../src/App.css"
import image from "./assets/image.avif"
function App() {
  const headingStyle = {
    color:"blue",
    fontSize:"30px"
  }
  return (
   <div>
    {/*below styles are inlineCSS style */}
    <h1 style={{color:"red", backgroundColor:"yellow"}}>
      Hello Students
    </h1>

    {/*this below was internal CSS */}
    <h1 style={headingStyle}>Hello</h1>

    {/*this below was external CSS */}
    <h1 className="heading">Hello students</h1>

    {/*this was the download image shows */}
    <img src={image} alt="butterfly" />

    <img src="https://img.freepik.com/premium-photo/beautiful-twenty-two-year-old-japan_961875-198769.jpg?ga=GA1.1.557018022.1776421437&semt=ais_hybrid&w=740&q=80" alt="beautiful girl" />
    
   </div>
  )
}

export default App
