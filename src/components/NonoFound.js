import React from 'react'
import  styles from './payment.module.css'
import Link from 'next/link'

const nonoFound= () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.title}>
            Oops! This page has not been found.
          </div>
          <div className={styles.text}>
              Please navigate to an existing page.
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

export default nonoFound;