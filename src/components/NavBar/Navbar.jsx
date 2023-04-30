
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import logo from "../assets/Logo-dl.png"
const NavBar = () => {
  return (
    <header>
       <h1><img src={logo} alt="" className="logoDl"/>
       alas Tennis Store</h1>
        <nav>
            <ul>
                <li>Raquetas</li>
                <li>Mochilas</li>
                <li>Accesorios</li>
                <li className="sale">SALE!</li>
            </ul>
        </nav>
         <CartWidget/>

    </header>
  )
}

export default NavBar