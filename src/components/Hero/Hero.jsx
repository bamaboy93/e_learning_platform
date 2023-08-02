import { motion } from "framer-motion";

import Container from "../Container/Container";
import image from "../../assets/chars.png";
import explorer from "../../assets/scrollExplorer.png";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroOverlay}>
        <Container>
          <div className={s.wrapper}>
            <h1 className={s.title}>Discover and collect super rare NFTs</h1>
            <h2 className={s.subtitle}>
              Digital marketplace for crypto collectibles and NFTs. Buy, sell,
              and discover exclusive digital assets today.
            </h2>
            <motion.button
              whileTap={{ scale: 1.1 }}
              className={s.button}
              type="button"
            >
              connect wallet
            </motion.button>
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
