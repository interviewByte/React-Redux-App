import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart' element={<CardDetails />} />
      </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
