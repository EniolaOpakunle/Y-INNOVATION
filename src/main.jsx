import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18next.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense  fallback={(<div>Loading</div>)}  >
     <App />
     </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
