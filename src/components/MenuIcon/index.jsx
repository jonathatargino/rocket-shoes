import menuSvg from "../../assets/menu-svgrepo-com.svg"

import styles from "./styles.module.css"

function MenuIcon({showOptions, setShowOptions}){
  return (
    <img 
    onClick={() => showOptions? setShowOptions(false) : setShowOptions(true)}
    src={menuSvg} 
    className={styles.menuIcon}
    />
  )
}

export default MenuIcon