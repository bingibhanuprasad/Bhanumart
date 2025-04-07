import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";  // Correct spelling
import { CartProvider } from './stores/context/CartContext.jsx';
import { AuthProvider } from './stores/context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <StrictMode>
    <CartProvider>
      <AuthProvider>
    <App />
    </AuthProvider>
    </CartProvider>
 
  </StrictMode>
  </BrowserRouter>
)
