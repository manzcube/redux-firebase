
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Button from './components/Button'

function App() {

  return (
    <>
      <Router>
        <div className='grid justify-items-end'>
          <Button color={'indigo'}>
            <Link to='/login'>Sign In</Link>
          </Button>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
