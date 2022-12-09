import NavBarStrap from "./components/NavBarStrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Plans from './pages/Plans'
import Budget from './pages/Budget'
import Footer from "./components/Footer";
import Qr from "./pages/Qr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarStrap/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/sobre" element={ <About/> } />
          <Route path="/planos" element={ <Plans/> } />
          <Route path="/orçamento" element={ <Budget/> } />
          <Route path="/qr" element={ <Qr/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
