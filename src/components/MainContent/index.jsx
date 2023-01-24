import tenisAmpliado from "../../assets/tenis-1-ampliado.png"
import tenis1 from "../../assets/tenis-1-galeria.png"
import tenis2 from "../../assets/tenis-2-galeria.png"
import tenis3 from "../../assets/tenis-3-galeria.png"

import styles from "./styles.module.css"


function MainContent(){
  return (
    <div className={styles.mainGrid}>
      <div className={styles.productInfo}>
        <div className={styles.centered}>
          <h1 className={styles.title}>Tênis Esportivo Para Corrida Top</h1>
          <h2 className={styles.subtitle}>Esse tênis tem o intuito de te deixar ainda mais fitness, focado e musculoso.</h2>
          <span className={styles.price}>R$ 1.000,00</span>
          <button className={styles.buyButton} type="button">Comprar</button>
        </div>
      </div>
      <div className={styles.productPhotos}>
        <img src={tenisAmpliado}  className={styles.mainImg}/>
        <div className={styles.imgGrid}>
          <img src={tenis1} className={styles.bottomImg}/>
          <img src={tenis2} className={styles.bottomImg}/>
          <img src={tenis3} className={styles.bottomImg}/>
        </div>
      </div>
    </div>
  )
}

export default MainContent;