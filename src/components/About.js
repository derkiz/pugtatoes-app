import React from 'react'
import styles from './common-style2.module.css'

const About = () => {
  return (
    <>
      <div className={styles.flex_container}>
        <div className={styles.container} style={{ display: 'flex', flexDirection:'row'}}>

          <div className={styles.box_1}>
          <div className={styles.title} style={{ fontSize: '3em'}}>
              Our Story
            </div>
            <div clasName={styles.paragraph}>
              Our mission is to create distinctive, well-designed art that brings 
              personality and style to your space. Each piece is thoughtfully crafted, 
              starting with hand-drawn designs by talented artists, then elevated 
              through digital techniques to ensure high quality and originality. 
              With a focus on sustainability and local craftsmanship, we aim to offer 
              art that not only looks great but also resonates with a sense of 
              purpose and creativity.
            </div>
          </div>

          <div className={styles.box_2}>
            <img src="../static/mug-header.png" loading="eager"></img>
          </div>

        </div>
      </div>
    </>
  )
}

export default About