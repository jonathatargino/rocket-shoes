import logo from "../../assets/logo.svg"
import bagSvg from "../../assets/icon-bag.svg"

import SearchInput from "../../components/SearchInput"

import styles from "./styles.module.css"

function NavBar(){
  return (
    <div className={styles.navbar}>
      <img src={logo}/>
      <span>Homem</span>
      <span>Mulher</span>
      <span>Criança</span>
      <span>Customizar</span>
      <SearchInput/>
      <img src={bagSvg}/>
    </div>
  )
}

export default NavBar