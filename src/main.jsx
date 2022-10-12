import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Heading from "../src/components/Heading/Heading.jsx"
import NavLinks from './components/NavLinks/NavLinks'
import Links from "../src/components/NavLinks/mock"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading themeDark={true} textHeading="Texto" sizeHeading={"text-5xl"} uppercaseHeading={false} />
    <NavLinks links={Links}></NavLinks>
  </React.StrictMode>
)
