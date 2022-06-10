import { Route, Routes } from 'react-router'
import Auth from './Components/Auth/Auth'
import Director from './Components/Director/Director'
import './index.scss'

function App() {
  return <Routes>
    <Route path='auth/*' element={<Auth />} />
    <Route path='director/*' element={<Director />} />
  </Routes>
}

export default App;
