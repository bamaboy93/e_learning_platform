import Container from "../Container/Container";
import image from "../../assets/chars.png";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <h1 className={s.title}>Discover and collect super rare NFTs</h1>
        <h2 className={s.subtitle}>
          Digital marketplace for crypto collectibles and NFTs. Buy, sell, and
          discover exclusive digital assets today.
        </h2>
        <button className={s.button} type="button">
          connect wallet
        </button>
      </div>
      <div className={s.wrapperImage}>
        <img className={s.image} src={image} alt="nft heroes" />
      </div>
    </Container>
  );
};

export default Hero;
