import React from 'react'
import  styles from './payment.module.css'
import Link from 'next/link'

const empty = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.title}>
            Your cart is empty!
          </div>
          <div className={styles.text}>
              Please add an item to your cart and come back.
              <br></br>
              If you need any help, please contact us.
          </div>
          <Link href='/'>
            Return to Home Page
          </Link>
        </div>
      </div>
    </>
  )
}

export default empty;