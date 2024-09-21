import React from 'react'
import styles from './common-style2.module.css'

const About = () => {
  return (
    <>
      <div className={styles.flex_container}>
        <div className={styles.container}>
          <div className={styles.box}>
            <img src="/static/about-section.png" alt="Background" />
            <div className={styles.innerBox}>
              <div className={styles.innerText}>
              Our mission is to create distinctive, well-designed 
              art that brings personality and style to your space.
              </div>
            </div>
          </div>
          <div className={styles.title} style={{ marginBottom:'2rem', marginTop: '2rem'}}>Our values</div>
          <div className={styles.value_points}>
            <div className={styles.item}>
              <img src='/static/membrane.png' loading='eager' alt="Membrane" />
              <div className={styles.item_title}>Thoughtfully Sourced Materials</div>
              <div className={styles.item_text}>
                All of our prints are made using thoughtfully sourced, eco-conscious materials. 
              </div>
            </div>
            <div className={styles.item}>
              <img src='/static/porcelain.png' loading='eager' alt="Porcelain" />
              <div className={styles.item_title}>Locally Made</div>
              <div className={styles.item_text}>
                We proudly support local artisans by creating our prints and designs right here in the community. 
              </div>
            </div>
            <div className={styles.item}>
              <img src='/static/graphic-design.png' loading='eager' alt="Graphic Design" />
              <div className={styles.item_title}>From Hand To Digital</div>
              <div className={styles.item_text}>
                Each design begins as a hand-drawn illustration, carefully transformed into a high-quality digital print.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
