import styles from "./styles.module.css"

function BottomProductImage({src, current}) {

  if (current) {
    return (
      <img src={src} className={styles.current}/>
    )
  }

  
  return (
    <img src={src} className={styles.bottomImg}/>
  )
}

export default BottomProductImage