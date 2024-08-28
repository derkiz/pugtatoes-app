import React from 'react'
import  styles from './payment.module.css'
import Link from 'next/link'

const Cancelled = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.title}>
            Payment Cancelled
          </div>
          <div className={styles.text}>
              Your payment has been cancelled.
              <br></br>
              Please try again later, or contact us if you need help.
          </div>
          <Link href='/'>
            Return to Home Page
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cancelled