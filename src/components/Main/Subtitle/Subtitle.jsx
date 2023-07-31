import s from "./Subtitle.module.css";

const Subtitle = ({ text }) => {
  return <h3 className={s.subtitle}>{text}</h3>;
};

export default Subtitle;
