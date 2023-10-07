import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './main/Mainpage';
import Mati from './mati/App';
import Pedro from "./pedro/pedro";
import Pipe from "./pipe/pipe";

function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route index element={<Index />}/>
        <Route path="/mati" element={<Mati />} />
        <Route path="/pedro" element={<Pedro />} />
        <Route path="/pipe" element={<Pipe />} />
        
        
        </Routes>
      </BrowserRouter>
    );
}

export default App;