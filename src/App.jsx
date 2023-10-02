import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './main/Mainpage';


function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route index element={<Index />}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;