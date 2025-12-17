import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import UserDataContext from './context/userContext.jsx'
import CaptainContext from './context/CaptainContext.jsx';

createRoot(document.getElementById('root')).render(
 <CaptainContext>
   <UserDataContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserDataContext>
    </CaptainContext>
  
)
