import { RxTwitterLogo, RxDiscordLogo } from "react-icons/rx";

import Container from "../Container/Container";
import frame from "../../assets/footerFrame.png";

import s from "./Unity.module.css";

const Unity = () => {
  return (
    <section id="community" className={s.unity}>
      <Container>
        <div className={s.wrapper}>
          <h2 className={s.title}>Join the community</h2>
          <p className={s.info}>
            Join our Discord channel or follow us on Twitter keep up to date
            with our latest work and announcements.
          </p>

          <img
            className={s.frame}
            src={frame}
            alt="chars icons"
            width="388"
            height="320"
          />
        </div>

        <ul className={s.buttonsList}>
          <li className={s.buttonsItem}>
            <a
              href="https://discord.com/"
              target="blank"
              className={s.buttonDiscord}
            >
              <RxDiscordLogo size={20} />
              <span className={s.buttonName}>join discord</span>
            </a>
          </li>
          <li className={s.buttonsItem}>
            <a
              href="https://twitter.com/"
              target="blank"
              className={s.buttonTwi}
            >
              <RxTwitterLogo size={20} />
              <span className={s.buttonName}>follow twitter</span>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Unity;
