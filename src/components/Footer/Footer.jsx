import Container from "../Container/Container";
import s from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <ul className={s.footerList}>
          <li className={s.footerItem}>
            <a href="/" className={s.logo}>
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li className={s.footerItem}>
            <p>© 2023 designed by Nathalia Lourencao | Made with ❤️</p>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
