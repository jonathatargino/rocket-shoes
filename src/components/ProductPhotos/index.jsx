import tenis1 from "../../assets/tenis-1-galeria.png"
import tenis2 from "../../assets/tenis-2-galeria.png"
import tenis3 from "../../assets/tenis-3-galeria.png"
import tenisAmpliado1 from "../../assets/tenis-1-ampliado.png"
import tenisAmpliado2 from "../../assets/tenis-2-ampliado.png"
import tenisAmpliado3 from "../../assets/tenis-3-ampliado.png"

import styles from "./styles.module.css"

function ProductPhotos(){
  return (
    <div className={styles.productPhotos}>
      <img src={tenisAmpliado2}  className={styles.mainImg}/>
      <div className={styles.imgGrid}>
        <img src={tenis1} className={styles.bottomImg}/>
        <img src={tenis2} className={styles.bottomImg}/>
        <img src={tenis3} className={styles.bottomImg}/>
      </div>
    </div>
  )
}

export default ProductPhotos;