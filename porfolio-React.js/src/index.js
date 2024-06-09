import { createRoot } from 'react-dom/client';
import React from 'react'
import {App} from './components/App.jsx'
//import LocalServiceWorkerRegister from './localServiceWorkerRegister.js';
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)
//LocalServiceWorkerRegister();
//navigator.serviceWorker.register('/sw.js')

