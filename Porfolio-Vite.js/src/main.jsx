import { createRoot } from 'react-dom/client';
import React from 'react'
import {App} from './components/App.jsx'
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)