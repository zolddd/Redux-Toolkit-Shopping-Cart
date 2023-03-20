
import './App.css'
import { useSelector } from 'react-redux'
import Courses from './components/Courses'
function App() {
  const courseState= useSelector(state=>state.courses)
 
  console.log(courseState)

  return (
    <div className="App">
    <Courses/>
    </div>
  )
}

export default App
