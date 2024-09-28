import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import './App.css';

const App = () => {
  return (
      <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
