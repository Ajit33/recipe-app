import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './component/Navbar'
import Favorite from './pages/Favorites/Favorite'
import Details from './pages/Details/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/recipe-item/:id' element={<Details />} />
     </Routes>

   </div>
  )
}

export default App
