import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div style={{ height: '100vh', background:'#e2e5e9' }} className='d-flex flex-column justify-content-center align-items-center gap-5'>
    <h1 style={{fontSize:'150px', color:'#ff7101'}}>404</h1>
    <h1 style={{fontSize:'50px'}}>Not Found</h1>
    <Link href='/'>
        <button className='sc-button text-white border-0'>Go Back</button>
    </Link>
    </div>
  )
}

export default NotFound