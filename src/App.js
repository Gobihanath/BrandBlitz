
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgetPw from './Pages/ForgetPw';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import OurServices from './Pages/OurServices';
import DigitalMarketing from './Components/services/DigitalMarketing';
import Eventplanning1 from './Components/services/Eventplanning1';
import BrandStrategy1 from './Components/services/Brandstrategy1';
import ConsultingServices1 from './Components/services/ConsultingServices1';
import PublicRelations1 from './Components/services/PublicRelations1';
import InfluenceMarketing1 from './Components/services/InfluenceMarketing1';
import News1 from './Components/services/News1';
import WebDesign1 from './Components/services/WebDesign1';



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
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/OurServices' element={<OurServices/>}/>
      <Route path='/DigitalMarketing' element={<DigitalMarketing/>}/>
      <Route path='/Eventplanning1' element={<Eventplanning1/>}/>
      <Route path='/BrandStrategy1' element={<BrandStrategy1/>}/>
      <Route path='/ConsultingServices1' element={<ConsultingServices1/>}/>
      <Route path='/PublicRelations1' element={<PublicRelations1/>}/>
      <Route path='/InfluenceMarketing1' element={<InfluenceMarketing1/>}/>
      <Route path='/News1' element={<News1/>}/>
      <Route path='/WebDesign1' element={<WebDesign1/>}/>
     
     
     
      
    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
