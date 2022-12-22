import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Header from "./components/Header"
import AboutUS from './components/pages/AboutUS';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Footer from "./components/Footer"
import MainContents from './components/pages/MainContents'

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Navigate replace to="/home" />} />
          <Route path='/home' element={<MainContents />} />
          <Route path='/aboutus' element={<AboutUS />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
