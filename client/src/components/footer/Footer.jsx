import { Link } from "react-router-dom";
import "./footer.css"; 

import { CiGlobe } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

export default function Footer() {
  return (
    <footer>
      <section id="footer__block">
        <Link to="/"><h2>QPICK</h2></Link>
      </section>
      <section id="footer__block">
        <div className="link__block__site">
          <Link to="/favorite">Избранное</Link>
          <Link to="/busket">Корзина</Link>
          <Link to="*">Контакты</Link>
        </div>
      </section>
      <section id="footer__block">
        <div className="conditions_block">
          <Link to="*">Условия сервиса</Link>
          <div>
            <CiGlobe color="rgb(140, 140, 140)" fontSize={25}/>
            <p>rus</p>
            <p>eng</p>
          </div>
        </div>
        
      </section>
      <section id="footer__block">
        <div className="social__block">
          <a href="https://vk.com/docttype"><SlSocialVkontakte fontSize={35} color="black"/></a>
          <a href="https://t.me/bratyloek"><FaTelegram fontSize={35} color="black"/></a>
          <a href="https://github.com/daniilcenyh"><FaWhatsapp fontSize={35} color="black"/></a>
        </div>
      </section>
    </footer>
  )
}