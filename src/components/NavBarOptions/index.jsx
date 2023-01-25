import styles from "./styles.module.css"

function NavBarOptions({showOptions}){
  let navbarStyle

  if (showOptions) {
    navbarStyle = styles.clickedOptions
  } else {
    navbarStyle = styles.options
  }
  
  return (
    <div className={navbarStyle}>
      <span>Homem</span>
      <span>Mulher</span>
      <span>Criança</span>
      <span>Customizar</span>
    </div>
  )
}

export default NavBarOptions