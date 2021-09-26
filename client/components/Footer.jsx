import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer (props) {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div>Vroom, 2021 &copy; &nbsp;</div>
        <Link to='/contact' className='footer-links animate__infinite'>Contact &nbsp;</Link>
        <Link to='/terms' className='footer-links animate__infinite'>Terms and Conditions</Link>
      </div>
    </footer>
  )
}
