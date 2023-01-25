import styles from "./styles.module.css"

function ProductInfo(){
  return (
    <div className={styles.productInfo}>
      <div className={styles.centered}>
        <h1 className={styles.title}>Tênis Esportivo Para Corrida Top</h1>
        <h2 className={styles.subtitle}>Esse tênis tem o intuito de te deixar ainda mais fitness, focado e musculoso.</h2>
        <span className={styles.price}>R$ 1.000,00</span>
        <button className={styles.buyButton} type="button">Comprar</button>
      </div>
    </div>
  )
}

export default ProductInfo;