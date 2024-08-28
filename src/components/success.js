import React from 'react'
import  styles from './payment.module.css'
import Link from 'next/link'

const Success = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.title}>
            Payment Successful
          </div>
          <div className={styles.text}>
              Thank you for your purchase!
              <br></br>
              A receipt of your purchase has been sent to your email.
          </div>
          <Link href='/'>
            Return to Home Page
          </Link>
        </div>
      </div>
    </>
  )
}

export default Success