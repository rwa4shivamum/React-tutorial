import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormPage } from './pages/FormPage'
import { DisplayPage } from './pages/DisplayPage'
import { DeletePage } from './pages/DeletePage'

function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<FormPage/>}/>
       <Route path='/display' element={<DisplayPage/>}/>
       <Route path='/delete/:id' element={<DeletePage/>}/>
       <Route path='/edit/:id' element={<FormPage/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
