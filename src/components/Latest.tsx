import React from 'react'
import './latest.css'
import Link from 'next/link'

const Latest = () => {
  return (
    <>
      <div className="latest-parent">
        <div className="latest">
          <h2>Meet our bestsellers</h2>
          <div className='best-products'>
            <ul>
              <li><Link href="slug">product 1</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Latest