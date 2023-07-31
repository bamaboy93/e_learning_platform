import Title from "../Main/Title/Title";
import s from "./About.module.css";

const About = () => {
  return (
    <section className={s.about}>
      <Title text="A new wave of collectibles is about to hit the blockchain." />
      <p>
        Characterised by soft lighting, vintage colour schemes and quirky
        costumes, these generative 3D TinyFaces are the addition to your NFT
        collection you’ve been waiting for.
      </p>
    </section>
  );
};

export default About;
