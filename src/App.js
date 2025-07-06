
import './App.css';
import Main from './pages/Main';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import Heads from './components/Heads';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects';
import './heads.css'
import './Main.css'
import './Footer.css'
import './gallery.css'
import './project.css'
import './contact.css'

function App() {
  return (
    <div>
     
      <BrowserRouter>
       <Heads/>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/Gallery' element={<Gallery/>}></Route>
            <Route path='/Projects' element={<Projects/>}></Route>
            <Route path='/Certificate' element={<Certificate/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            
           
        </Routes>
       <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
