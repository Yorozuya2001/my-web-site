import { Link } from "react-router-dom"
import HomeSVG from "./svg/HomeSVG"
import PortfolioSVG from "./svg/PortfolioSVG"
import StackSVG from "./svg/StackSVG"
import ContactSVG from "./svg/ContactSVG"
import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <header className={styles.header}>
      <Link to={"/aboutMe"}>
        <HomeSVG/>
      </Link>
      <Link to={"/stack"}>
      <StackSVG/>
      </Link>
      <Link to={"/portfolio"}>
      <PortfolioSVG/>
      </Link>
      <Link to={"/conctac"}>
      <ContactSVG/>
      </Link>
    </header>
  )
}

export default Menu