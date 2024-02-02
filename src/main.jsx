import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Globalstate, { GlobalContext } from './context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
   <Globalstate>
    <App />
   </Globalstate>
  </React.StrictMode>
  </BrowserRouter>
)
