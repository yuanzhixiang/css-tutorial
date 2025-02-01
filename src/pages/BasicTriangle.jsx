import React from 'react'
import { Link } from 'react-router-dom'

export default function BasicTriangle() {
  return (
    <div className="demo-page">
      <header>
        <Link to="/" className="back-link">← Back to List</Link>
        <h1>Basic Triangle Shapes</h1>
      </header>
      
      <div className="demo-container">
        <div className="shape triangle"></div>
        <div className="shape triangle"></div>
        <div className="shape triangle"></div>
        <div className="shape triangle"></div>
      </div>
    </div>
  )
} 