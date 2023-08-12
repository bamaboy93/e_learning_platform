import { useSpring, animated } from "react-spring";

import Container from "../Container/Container";
import image from "../../assets/chars.png";
import explorer from "../../assets/scrollExplorer.png";
import s from "./Hero.module.css";

const Hero = () => {
  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-80px)",
    },
    to: [{ transform: "translateY(10px)" }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <section className={s.hero}>
      <div className={s.heroOverlay}>
        <Container>
          <div className={s.wrapper}>
            <animated.h1 className={s.title} style={titleAnimation}>
              Discover and collect super rare NFTs
            </animated.h1>
            <h2 className={s.subtitle}>
              Digital marketplace for crypto collectibles and NFTs. Buy, sell,
              and discover exclusive digital assets today.
            </h2>
            <button className={s.button} type="button">
              connect wallet
            </button>
          </div>
          <div className={s.wrapperImage}>
            <img className={s.image} src={image} alt="nft heroes" />{" "}
            <a href="/" className={s.explorer}>
              <img src={explorer} alt="logo" />
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
