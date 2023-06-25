import Container from "../Container/Container";
import s from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <header className={s.header}>
        <a href="/" className={s.logo}>
          GlobalTalk
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
                Textbook
              </a>
            </li>
            <li className={s.navItem}>
              <a href="" className={s.navLink}>
                Statistics
              </a>
            </li>
            <li className={s.navItem}>
              <p>Games</p>
            </li>
          </ul>
        </nav>

        <ul className={s.userList}>
          <li className={s.user}>
            <div className={s.avatar}></div>
            <p className={s.userName}>Alex</p>
          </li>
          <li className={s.userActions}>
            <button type="button" className={s.button}>
              Sign Out
            </button>
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default Header;
