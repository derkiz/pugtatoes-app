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
          <div className={styles.title}>Explore our latest stickers!</div>
          <div className={styles.p_elem} style={{ textAlign:'center' }}>A great gift, a cute collectible, a chubby pug, a silly companion. See our latest festive designs! :-)</div>
          <div className={styles.btn_parent}>
            <Link href="/collections">  
              <div className={styles.cta_btn}>
                <div>Shop All</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cta