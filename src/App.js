import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FirstOverlay from "./components/FirstOverlay"
import OverlayWrapper from './components/tools/OverlayWrapper';

function App() {
  return (
    <>
      <Header />
      <OverlayWrapper>
        <FirstOverlay />
      </OverlayWrapper>
      <Footer />
    </>
  );
}

export default App;
