import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from './components';
import { CartProvider } from './context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={4000} position={"bottom-right"}/>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>
);
