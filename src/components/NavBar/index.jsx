import { useEffect, useState } from "react"

import logo from "../../assets/logo.svg"
import bagSvg from "../../assets/icon-bag.svg"

import SearchInput from "../../components/SearchInput"

import styles from "./styles.module.css"
import NavBarOptions from "../NavBarOptions"
import MenuIcon from "../MenuIcon"

function NavBar(){
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div 
    className={styles.navbar} 
    >
      <img src={logo}/>
      <NavBarOptions showOptions={showOptions}/>
      <SearchInput/>
      <img src={bagSvg} className={styles.bag}/>
      <MenuIcon showOptions={showOptions} setShowOptions={setShowOptions}/>
    </div>
  )
}

export default NavBar