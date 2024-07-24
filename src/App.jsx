
import './App.css'
import Header from'./Components/Header'
import Footer from'./Components/Footer'
import AllRest from'./Components/AllRest'
import { Route, Routes } from 'react-router-dom'
import Viewrest from './Components/Viewrest'
function App() {
  

  return (
    <>
    
    <Header/>
    <Routes>
    {/* localhost:5173 -Allrest */}
    <Route path='/' element={<AllRest/>}/>

    {/* localhost:5173/view/12 -viewrest */}
    <Route path='/view/:id' element={<Viewrest/>}/>
    </Routes>
    
    <Footer/>

    </>
  )
}

export default App
