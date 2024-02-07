
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgetPw from './Pages/ForgetPw';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/ForgetPw' element={<ForgetPw/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>


    </BrowserRouter>  
    </div>
  );
}

export default App;
