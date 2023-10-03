import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './main/Mainpage';
import Mati from './mati/App';

function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route index element={<Index />}/>
        <Route path="/mati" element={<Mati />} />
        
        </Routes>
      </BrowserRouter>
    );
}

export default App;