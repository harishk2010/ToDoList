import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Task from './Task.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task/>
  </StrictMode>,
)
