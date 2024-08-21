import React from 'react'
import styles from './common-style2.module.css'

const About = () => {
  return (
    <>
      <div className={styles.flex_container}>
        <div className={styles.container} style={{ display: 'flex', flexDirection:'row'}}>
          <div className={styles.box}>
            <div className={styles.innerBox}>
              Our mission is to create distinctive, well-designed 
              art that brings personality and style to your space. 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About