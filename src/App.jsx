import Navbar from './components/Navbar'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Cart from './pages/Cart'

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
