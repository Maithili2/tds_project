
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Landing from './components/Landing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/summarize_frontend" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
