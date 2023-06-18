import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="divF">
        <p>Sitio web creado por </p>
        <img src="../img/recurso-1.png" alt="logo Dalas digital" className="logoD" />
        </div>
        <p>Todos los derechos reservados</p>

        <div>
            <img src="../img/instagram.png" alt="logo de instagram"/>
            <img src="../img/facebook.png" className= "logoF" alt="logo de facebook" />
            <img src="../img/twitter.png" alt="logo de twitter" className="logoT"/>
            <img src="../img/sobre.png" alt="logo de email" />
        </div>
    </footer>
  )
}

export default Footer