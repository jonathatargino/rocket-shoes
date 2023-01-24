import styles from "./styles.module.css"

function SearchInput(){
  return (
    <input
      className={styles.search}
      type="text"
      autoComplete="off"
      placeholder="Pesquisar"
    />
  )
}

export default SearchInput;