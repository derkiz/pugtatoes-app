import React from 'react'
import styles from './Cta.module.css'
import Head from 'next/head'

const Cta = () => {
  return ( 
  <>
    <Head>
      <link rel="preload" href="static/mug-header.png" as="image"></link>
    </Head>
    <div className={styles.header_cta}>
      <div className={styles.element_1}>
        <img className={styles.image_element} src="static/mug-header.png" loading="eager"></img>
      </div>
      <div className={styles.element_2}>
        <div className={styles.element_main}>
          <div className={styles.title}>Take a sip</div>
          <div className={styles.p_elem}>A great gift, a cute collectible, a chubby pug, a silly companion. See our latest festive designs! :-)</div>
          <div className={styles.cta_btn}>
            Pick out a mug!
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cta