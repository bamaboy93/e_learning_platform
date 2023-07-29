import Container from "../Container/Container";
import webflow from "../../assets/webflow.png";
import relume from "../../assets/relume.png";
import s from "./Partners.module.css";

const Partners = () => {
  return (
    <div className={s.wrapper}>
      <section>
        <Container>
          <ul className={s.partnerList}>
            <li>
              <img src={webflow} alt="partner logo" width="183" height="44" />
            </li>
            <li>
              <img src={relume} alt="partner logo" width="182" height="52" />
            </li>
            <li>
              <img src={webflow} alt="partner logo" width="183" height="44" />
            </li>
            <li>
              <img src={relume} alt="partner logo" width="182" height="52" />
            </li>
            <li>
              <img src={webflow} alt="partner logo" width="182" height="44" />
            </li>
            <li>
              <img src={relume} alt="partner logo" width="183" height="52" />
            </li>
          </ul>
        </Container>
      </section>
    </div>
  );
};

export default Partners;
