import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Add from './components/Add'; 
import Edit from './components/Edit';
import image from './assets/image.avif'
function App() {
  

  return (
    <>
      
    
        <Header />
        <div className='bgImage'><img src={image} alt="" /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} /> 
        </Routes>
        <Footer />
     
   
    </>
  )
}

export default App
