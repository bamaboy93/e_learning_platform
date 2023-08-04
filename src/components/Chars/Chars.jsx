import Container from "../Container/Container";
import Subtitle from "../Main/Subtitle/Subtitle";
import Title from "../Main/Title/Title";

import char1 from "../../assets/chars/char1.png";
import char2 from "../../assets/chars/char2.png";
import char3 from "../../assets/chars/char3.png";
import char4 from "../../assets/chars/char4.png";

import s from "./Chars.module.css";

const Chars = () => {
  return (
    <section className={s.chars}>
      <Container>
        <Subtitle text="Find your" />
        <Title text="Favourite character" />
        <ul className={s.list}>
          <li className={s.item}>
            <h4 className={s.charName}>
              <span className={s.numeration}>A.</span> Monkey Icon
            </h4>

            <div className={s.imageOne}>
              <img className={s.image} src={char1} alt="char icon" />
            </div>

            <ul className={s.infoList}>
              <li className={s.infoItem}>
                <p className={s.infoTimer}>12h:10m:23s</p>
                <p className={s.infoTitle}>Remaning Time</p>
              </li>
              <li className={s.infoItem}>
                <p className={s.infoBid}>18.87 ETH</p>
                <p className={s.infoTitle}>Highest bid</p>
              </li>
            </ul>
          </li>
          <li className={s.item}>
            <h4 className={s.charName}>
              <span className={s.numeration}>B.</span> Monkey Icon
            </h4>

            <div className={s.imageTwo}>
              <img
                className={s.image}
                src={char2}
                alt="char icon"
                width="241"
                height="241"
              />
            </div>

            <ul className={s.infoList}>
              <li className={s.infoItem}>
                <p className={s.infoTimer}>12h:10m:23s</p>
                <p className={s.infoTitle}>Remaning Time</p>
              </li>
              <li className={s.infoItem}>
                <p className={s.infoBid}>11.72 ETH</p>
                <p className={s.infoTitle}>Highest bid</p>
              </li>
            </ul>
          </li>
          <li className={s.item}>
            <h4 className={s.charName}>
              <span className={s.numeration}>C.</span> Monkey Icon
            </h4>

            <div className={s.imageThree}>
              <img
                className={s.image}
                src={char3}
                alt="char icon"
                width="241"
                height="241"
              />
            </div>

            <ul className={s.infoList}>
              <li className={s.infoItem}>
                <p className={s.infoTimer}>12h:10m:23s</p>
                <p className={s.infoTitle}>Remaning Time</p>
              </li>
              <li className={s.infoItem}>
                <p className={s.infoBid}>13.46 ETH</p>
                <p className={s.infoTitle}>Highest bid</p>
              </li>
            </ul>
          </li>
          <li className={s.item}>
            <h4 className={s.charName}>
              <span className={s.numeration}>D.</span> Monkey Icon
            </h4>

            <div className={s.imageFour}>
              <img
                className={s.image}
                src={char4}
                alt="char icon"
                width="241"
                height="241"
              />
            </div>

            <ul className={s.infoList}>
              <li className={s.infoItem}>
                <p className={s.infoTimer}>12h:10m:23s</p>
                <p className={s.infoTitle}>Remaning Time</p>
              </li>
              <li className={s.infoItem}>
                <p className={s.infoBid}>21.17 ETH</p>
                <p className={s.infoTitle}>Highest bid</p>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  );
};
export default Chars;
