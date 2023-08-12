import Container from "../Container/Container";
import Title from "../Main/Title/Title";
import Question from "./Question";

import data from "../../data/questions";
import s from "./Faq.module.css";

const Faq = () => {
  return (
    <section id="faq" className={s.faq}>
      <Container>
        <h3 className={s.subtitle}>FAQ</h3>
        <Title text="Your questions, answered." />

        <ul className={s.faqList}>
          {data.map(({ id, title, info }) => (
            <Question key={id} title={title} info={info} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Faq;
