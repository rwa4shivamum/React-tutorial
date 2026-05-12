import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import "bootstrap/dist/css/bootstrap.min.css";
import { ViewDetails } from './ViewDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/view/:id' element={<ViewDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
