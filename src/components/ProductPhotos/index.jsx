import { useState, useEffect, useRef} from "react"

import tenis1 from "../../assets/tenis-1-galeria.png"
import tenis2 from "../../assets/tenis-2-galeria.png"
import tenis3 from "../../assets/tenis-3-galeria.png"
import tenisAmpliado1 from "../../assets/tenis-1-ampliado.png"
import tenisAmpliado2 from "../../assets/tenis-2-ampliado.png"
import tenisAmpliado3 from "../../assets/tenis-3-ampliado.png"

import styles from "./styles.module.css"
import BottomProductImage from "../BottomProductImage"

function ProductPhotos(){
  const [selectedImage, setSelectedImage] = useState(0)
  const imgArray = [tenisAmpliado1, tenisAmpliado2, tenisAmpliado3]
  const autoPlayRef = useRef()
  function updateSelectedImage(){
    if (selectedImage === 2){
      setSelectedImage(0);
    }
    else {
      setSelectedImage(selectedImage + 1);
    }
  }

  useEffect(() => {
    autoPlayRef.current = updateSelectedImage
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, 2000);
  },[])


  return (
    <div className={styles.productPhotos}>
      <img src={imgArray[selectedImage]}  className={styles.mainImg}/>
      <div className={styles.imgGrid}>
        <BottomProductImage src={tenis1} current={selectedImage === 0}/>
        <BottomProductImage src={tenis2} current={selectedImage === 1}/>
        <BottomProductImage src={tenis3} current={selectedImage === 2}/>
      </div>
    </div>
  )
}

export default ProductPhotos;