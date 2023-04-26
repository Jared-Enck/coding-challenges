import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import AdminPage from './AdminPage'
import SignUp from './SignUp'
import NotFound from './NotFound'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}