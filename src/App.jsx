import { Route,Routes } from 'react-router-dom'
import './App.css'
import Courses from './components/Courses'
import ShoppingCart from './components/ShoppingCart'
import Favorites from './components/Favorites'
function App() {
 
  return (
    <div>
    <Routes>
      <Route path='/' element={<Courses/>}/>
      <Route path='/cart' element={<ShoppingCart/>}/>
      <Route path='/favorite' element={<Favorites/>}/>
    </Routes>
    </div>
  )
}

export default App
