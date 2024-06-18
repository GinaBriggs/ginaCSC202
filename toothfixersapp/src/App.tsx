import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Records from './records/Records';
import Biodata from './biodata/Biodata';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Biodata />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
