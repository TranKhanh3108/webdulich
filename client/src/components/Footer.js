import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <nav className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <NavLink className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span style={{fontFamily:'UTM AVO',fontWeight:'bold'}} className='me-3'></span>
          </p>
        </section>
      </NavLink>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: 
        <NavLink className='text-white' href='#'>
           Khanh - Duc
        </NavLink>
      </div>
    </nav>
    </>
  )
}

export default Footer