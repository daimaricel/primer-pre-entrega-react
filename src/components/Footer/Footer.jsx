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
            <img src="../img/instagram.png" alt="logo de instagram" title="Instagram"/>
            <img src="../img/facebook.png" className= "logoF" alt="logo de facebook" title="Facebook"/>
            <img src="../img/twitter.png" alt="logo de twitter" className="logoT"title="Twitter"/>
            <img src="../img/sobre.png" alt="logo de email"title="E-mail" />
        </div>
    </footer>
  )
}

export default Footer