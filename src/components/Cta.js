import React from 'react'
import styles from './Cta.module.css'
import Head from 'next/head'
import Link from 'next/link'

const Cta = () => {
  return ( 
  <>
    <Head>
      <link rel="preload" href="static/mug-header.png" as="image"></link>
    </Head>
    <div className={styles.header_cta}>
      <div className={styles.element_1}>
        <img className={styles.image_element} src="static/header.png" loading="eager"></img>
      </div>
      <div className={styles.element_2}>
        <div className={styles.element_main}>
          <div className={styles.title}>Explore our collections!</div>
          <div className={styles.p_elem}>A great gift, a cute collectible, a chubby pug, a silly companion. See our latest festive designs! :-)</div>
          <div className={styles.cta_btn}>
            <Link href="/collections">
              <div>Collections</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cta