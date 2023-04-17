//import "./style.css";
import './App.css';

import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Stock from "./pages/stock";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stocks/:symbol" element={<Stock/>}/>
        <Route path="/stocks" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

