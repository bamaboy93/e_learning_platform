import s from "./Title.module.css";

const Title = ({ text }) => {
  return <h2 className={s.title}>{text}</h2>;
};

export default Title;
