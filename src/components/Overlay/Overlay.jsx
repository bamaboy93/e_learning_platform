import s from "./Overlay.module.css";

const Overlay = ({ children }) => {
  return <div className={s.overlay}>{children}</div>;
};

export default Overlay;
