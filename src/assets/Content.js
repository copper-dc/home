import React from 'react'
import "./Content.css"
import About from './About'
import Features from './Features'

const Content = () => {
  return (
    <div className='content'>
        <About />
        <Features/>
    </div>
  )
}

export default Content