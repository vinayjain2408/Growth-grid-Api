import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Detail from './Detail';

function Home() {

  return (

    <Router>
     
      <Routes>
        <Route path="/" element={<App />} />      
        <Route path="/detail/:fld_id" element={<Detail />} />      
      </Routes>
      
    </Router>
 
  );
}

export default Home;
