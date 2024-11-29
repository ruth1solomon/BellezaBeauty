import {BrowserRouter,Routes ,Route} from "react-router-dom";
import Aboutpage from './Pages/Aboutpage';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Navbar from "./Components/Header/Navbar";
import blush from '/src/Components/Images/blush1.jpg';
import Gallery from "./Pages/Gallery";
function App() {
  
  return (
    <>
      <div className=" px-8 mx-auto bg-white-chocolate" >
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/gallery" element={<Gallery />}/> 
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
