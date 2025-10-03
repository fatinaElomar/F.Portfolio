import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'   
import { StrictMode } from 'react'
import App from './App'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
