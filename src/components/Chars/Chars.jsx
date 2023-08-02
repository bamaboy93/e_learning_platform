import Container from "../Container/Container";
import Subtitle from "../Main/Subtitle/Subtitle";
import Title from "../Main/Title/Title";

import s from "./Chars.module.css";

const Chars = () => {
  return (
    <section className={s.chars}>
      <Container>
        <Subtitle text="Find your" />
        <Title text="Favourite character" />
      </Container>
    </section>
  );
};
export default Chars;
