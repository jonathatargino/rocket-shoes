import imgVideo from "../../assets/img-video.png"
import arrowSvg from "../../assets/icon-arrow.svg"

import styles from "./styles.module.css"

function Footer(){
  return (
    <div className={styles.footer}>
      <img src={imgVideo} className={styles.img}/>
      <div className={styles.socialMedia}>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Youtube</span>
        <span>Twitter</span>
      </div>
      <button className={styles.exploreButton} type="button">
        Explore mais 
        <img src={arrowSvg}/>
        </button>
    </div>
  )
}

export default Footer