import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useTransition, useSpring, animated } from "react-spring";

import s from "./Faq.module.css";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "86px" },
    to: { opacity: "1", maxHeight: expanded ? "300px" : "86px" },
    config: { duration: "200" },
  });

  const transitions = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
    config: { duration: "200" },
  });

  return (
    <animated.li className={s.faqItem} style={openAnimation}>
      <div className={s.mainItem}>
        <h4 className={s.question}>{title}</h4>
        <button
          className={s.button}
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <animated.i style={transitions}>
              <HiMinus size={32} />
            </animated.i>
          ) : (
            <animated.i style={transitions}>
              <HiPlus size={32} />
            </animated.i>
          )}
        </button>
      </div>
      <p className={s.answer}>{info}</p>
    </animated.li>
  );
};

export default Question;
