import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import Contact from './routes/Contact';

function App() {
return (
<div className="page">
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
</div>
);
}

export default App
