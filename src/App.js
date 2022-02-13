import React from "react";
import {Routes,Route} from 'react-router-dom';
import Contacting from "./routes/Contacting";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Shirting from "./routes/Shirting";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Shirting/>} />
        <Route path='/contact' element={<Contacting/>} />
      </Routes>
    </>
  );
}

export default App;
