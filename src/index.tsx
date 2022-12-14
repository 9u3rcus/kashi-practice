import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/App';
import reportWebVitals from './reportWebVitals';
import { Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App/>} />
  </Routes>
</BrowserRouter>
);
}
