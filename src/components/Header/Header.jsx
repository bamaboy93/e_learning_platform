import { RxGithubLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import Container from "../Container/Container";
import s from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <a href="/" className={s.logo}>
            <img src={logo} alt="logo" />
          </a>
          <nav>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <a href="" className={s.navLink}>
                  Home
                </a>
              </li>
              <li className={s.navItem}>
                <a href="" className={s.navLink}>
                  about
                </a>
              </li>
              <li className={s.navItem}>
                <a href="" className={s.navLink}>
                  characters
                </a>
              </li>
              <li className={s.navItem}>
                <a href="" className={s.navLink}>
                  <p>FAQ</p>
                </a>
              </li>
              <li className={s.navItem}>
                <a href="" className={s.navLink}>
                  <p>community</p>
                </a>
              </li>
            </ul>
          </nav>

          <ul className={s.socialsList}>
            <li className={s.socialsItem}>
              <a className={s.socialsLink} href="/">
                <RxGithubLogo size={22} />
              </a>
            </li>
            <li className={s.socialsItem}>
              <a className={s.socialsLink} href="/">
                <RxTwitterLogo size={22} />
              </a>
            </li>
            <li className={s.socialsItem}>
              <a className={s.socialsLink} href="/">
                <RxInstagramLogo size={22} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
