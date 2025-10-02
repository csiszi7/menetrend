import Home from "./pages/Home";
import './App.css'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Jegy from "./components/Jegy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jegy" element={<Jegy />} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App;
