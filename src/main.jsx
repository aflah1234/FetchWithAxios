import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FetchWithAxios from './FetchWithAxios.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <FetchWithAxios/>
  </div>
)


ReactDOM.render(<App />, document.getElementById('root'));