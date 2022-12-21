import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"
import AboutUS from './components/pages/AboutUS';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Footer from "./components/Footer"
import MainContents from './components/pages/MainContents'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/home' element={<MainContents />} />
          <Route path='/aboutus' element={<AboutUS />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
