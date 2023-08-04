import { useState } from "react";
import { HiPlus } from "react-icons/hi";

import s from "./Faq.module.css";

const Question = ({ id, title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li key={id} className={s.faqItem}>
      <div className={s.mainItem}>
        <h4 className={s.question}>{title}</h4>
        <button
          className={s.button}
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <HiPlus size={32} />
        </button>
      </div>
      {expanded && <p className={s.answer}>{info}</p>}
    </li>
  );
};

export default Question;
