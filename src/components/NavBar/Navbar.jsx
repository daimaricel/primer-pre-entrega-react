
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import logo from "../assets/Logo-dl.png"
const NavBar = () => {
  return (
      
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
   <h1><img src={logo} alt="" className="logoDl"/>
       alas Tennis Store</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Raquetas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mochilas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"href="#">Accesorios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active sale" aria-current="page" href="#">Sale!</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
  )
}

export default NavBar