
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthButton from './components/AuthButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-700'>Project's Name</h1>
      
      <Router>
        <div className='text-right mx-8'>
          <AuthButton />
        </div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>          
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
