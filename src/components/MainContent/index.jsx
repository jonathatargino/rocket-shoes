import ProductInfo from "../ProductInfo"
import ProductPhotos from "../ProductPhotos";

import styles from "./styles.module.css"

function MainContent(){
  return (
    <div className={styles.mainGrid}>
      <ProductInfo/>
      <ProductPhotos/>
    </div>
  )
}

export default MainContent;