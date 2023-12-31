
import Navbar from './components/Navbar/Navbar'
import {Home,About,Contact,Portfolio} from './pages'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
