import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import {worker} from './mocks/browser'

import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);

if (process.env.NODE_ENV === 'development') {
  worker.start()
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
